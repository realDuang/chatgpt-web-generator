import { PlusIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import {
  chatHistoriesState,
  chatHistoryState,
  currentChatIdState,
} from "@/store/chatHistories";

export const MenuView: FC = () => {
  const chatHistories = useRecoilValue(chatHistoriesState);
  const addNewChat = useSetRecoilState(chatHistoryState(uuidv4()));

  const [currentChatId, setCurrentChatId] = useRecoilState(currentChatIdState);

  return (
    <div className="bg-gray-800 text-white hidden md:fixed md:h-full md:flex md:flex-col md:w-[260px]">
      <div className="flex items-center px-4 h-14 border-b border-gray-700">
        <button
          className="mr-4 focus:outline-none"
          onClick={() => addNewChat([])}
        >
          <PlusIcon className="text-gray-400 h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {Object.entries(chatHistories).map(([chatId, chatMessages]) => {
          const question = chatMessages[1]?.content;
          const answer = chatMessages[2]?.content;
          return (
            <div key={chatId}>
              <div
                className={classNames(
                  "cursor-pointer hover:bg-gray-700 p-4",
                  {
                    "bg-gray-600": currentChatId === chatId,
                  }
                )}
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
    </div>
  );
};
