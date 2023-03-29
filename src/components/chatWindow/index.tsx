import { FC } from "react";
import {
  ChatCompletionResponseMessageRoleEnum,
  ChatCompletionResponseMessage,
} from "openai";
import { useInjection } from "inversify-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatHistoryState } from "@/store/chatHistories";

import { currentChatIdState } from "@/store/chatHistories";

import { IOpenaiService } from "@/services/types";
import ChatDialog from "./ChatDialog";
import ChatInput from "./ChatInput";

const ChatWindow: FC = () => {
  const currentChatId = useRecoilValue(currentChatIdState);
  const [chatHistory, setChatHistory] = useRecoilState(
    chatHistoryState(currentChatId)
  );

  const openaiService = useInjection<IOpenaiService>(IOpenaiService);

  const sendMessage = async (message: string) => {
    const newChatMessage: ChatCompletionResponseMessage = {
      content: message,
      role: ChatCompletionResponseMessageRoleEnum.User,
    };

    const newChatHistory = [...chatHistory, newChatMessage];
    setChatHistory(newChatHistory);

    const imageTag = "#image# ";
    if (message.startsWith(imageTag)) {
      const [images] = await openaiService.createImage({
        prompt: message.replace(imageTag, ""),
      });
      if (images.url) {
        const newAnswer: ChatCompletionResponseMessage = {
          // markdown image
          content: `![${images.url}](${images.url})`,
          role: ChatCompletionResponseMessageRoleEnum.Assistant,
        };
        const answerChatHistory = [...newChatHistory, newAnswer];
        setChatHistory(answerChatHistory);
      }
    } else {
      const answer = await openaiService.generateAnswer({
        messages: newChatHistory,
      });
      if (answer) {
        const answerChatHistory = [...newChatHistory, answer];
        setChatHistory(answerChatHistory);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-full md:pl-[260px] overflow-auto">
        <ChatDialog chatHistory={chatHistory} />
      </div>
      <div className="fixed bottom-0 left-0 w-full md:pl-[260px]">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </>
  );
};

export default ChatWindow;
