import { FC } from "react";
import {
  ChatCompletionResponseMessageRoleEnum,
  ChatCompletionResponseMessage,
} from "openai";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export interface ChatDialogProps {
  chatHistory: ChatCompletionResponseMessage[];
}

const ChatDialog: FC<ChatDialogProps> = (props) => {
  const { chatHistory } = props;
  return (
    <div className="bg-gray-200 flex-grow">
      <div className="flex flex-col h-full px-4 py-8">
        <div className="flex-grow">
          {chatHistory.map((chatMessage) => {
            const isUser =
              chatMessage.role === ChatCompletionResponseMessageRoleEnum.User;
            return (
              <div
                key={chatMessage.content}
                className={`flex items-end mb-4 ${
                  isUser && "flex-row-reverse"
                }`}
              >
                {isUser ? (
                  <div className="rounded-full h-8 w-8 bg-white">
                    <UserCircleIcon />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                )}

                <div className={`flex flex-col ${isUser ? "mr-2" : "ml-2"}`}>
                  <div
                    className={`bg-gray-300 px-4 py-2 rounded-t-lg ${
                      isUser ? "rounded-bl-lg" : "rounded-br-lg"
                    } max-w-2xl break-words`}
                  >
                    <ReactMarkdown
                      className="text-sm text-gray-700 leading-snug"
                      children={chatMessage.content}
                    ></ReactMarkdown>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {chatMessage.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;
