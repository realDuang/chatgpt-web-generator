import { FC, useState } from "react";
import {
  ChatCompletionResponseMessageRoleEnum,
  ChatCompletionResponseMessage,
} from "openai";
import { useInjection } from "inversify-react";
import { IOpenaiService } from "../../services/types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ChatGPTChatWindow: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<
    ChatCompletionResponseMessage[]
  >([]);

  const openaiService = useInjection<IOpenaiService>(IOpenaiService);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleMessageSubmit = async () => {
    if (inputValue.trim() === "") return;

    const newChatMessage: ChatCompletionResponseMessage = {
      content: inputValue,
      role: ChatCompletionResponseMessageRoleEnum.User,
    };

    const newChatHistory = [...chatHistory, newChatMessage];
    setChatHistory(newChatHistory);
    setInputValue("");

    const answer = await openaiService.generateAnswer({
      model: "gpt-3.5-turbo",
      messages: newChatHistory,
    });

    if (answer) {
      const answerChatHistory = [...newChatHistory, answer];
      setChatHistory(answerChatHistory);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen">
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
                    isUser ? "flex-row-reverse" : ""
                  }`}
                >
                  {isUser ? (
                    <div className="rounded-full h-8 w-8 bg-blue-600"></div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  )}

                  <div className={`flex flex-col ${isUser ? "mr-2" : "ml-2"}`}>
                    <div
                      className={`bg-gray-300 px-4 py-2 rounded-t-lg ${
                        isUser ? "rounded-bl-lg" : "rounded-br-lg"
                      } max-w-xs`}
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
      <div className="bg-gray-300 py-4 px-4" role="form">
        <div className="flex">
          <div className="flex-grow mr-2">
            <input
              type="text"
              className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            className="rounded-full h-10 w-10 bg-blue-600 flex items-center justify-center text-white"
            onClick={handleMessageSubmit}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTChatWindow;
