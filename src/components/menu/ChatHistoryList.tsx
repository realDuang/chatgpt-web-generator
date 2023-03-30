import type { FC } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import classNames from "classnames";
import { chatHistoriesState, currentChatIdState } from "@/store/chatHistories";

export const ChatHistoryList: FC = () => {
  const chatHistories = useRecoilValue(chatHistoriesState);
  const [currentChatId, setCurrentChatId] = useRecoilState(currentChatIdState);

  return (
    <div className="flex-1 overflow-y-auto">
      {Object.entries(chatHistories).map(([chatId, chatMessages]) => {
        const question = chatMessages[1]?.content;
        const answer = chatMessages[2]?.content;
        return (
          <div key={chatId}>
            <div
              className={classNames("cursor-pointer hover:bg-gray-700 p-4", {
                "bg-gray-600": currentChatId === chatId,
              })}
              onClick={() => setCurrentChatId(chatId)}
            >
              <div className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
                {question ?? "新对话"}
              </div>
              {answer && (
                <div className="text-gray-400 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {answer}
                </div>
              )}
            </div>
            <hr className="border-gray-700"></hr>
          </div>
        );
      })}
    </div>
  );
};
