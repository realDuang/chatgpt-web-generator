import { KeyIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

export const MenuView: FC = () => {
  return (
    <div className="bg-gray-800 text-white hidden md:fixed md:h-full md:flex md:flex-col md:w-[260px]">
      <div className="flex items-center px-4 h-14 border-b border-gray-700">
        <button className="mr-4">
          <KeyIcon className="text-gray-400 h-6 w-6" />
        </button>
      </div>

      <div className="px-4 py-4 border-b border-gray-700">
        <div className="font-bold">Chat</div>
        <div className="text-gray-400 overflow-hidden overflow-ellipsis whitespace-nowrap">ChatGPT Large Language Model</div>
      </div>
    </div>
  );
};
