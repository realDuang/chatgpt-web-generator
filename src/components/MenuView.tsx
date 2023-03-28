import { KeyIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

export const MenuView: FC = () => {
  return (
    <div className="bg-gray-800 text-white hidden md:fixed md:inset-y-0 md:flex md:flex-col md:w-[260px]">

      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <button className="mr-4 focus:outline-none">
          <KeyIcon className="text-gray-300" />
        </button>
      </div>

      <div className="grow md:mx-4">
        <div className="mb-4">
          <div className="font-bold">标题1</div>
          <div className="text-gray-400">内容缩略1</div>
        </div>
        <div className="mb-4">
          <div className="font-bold">标题2</div>
          <div className="text-gray-400">内容缩略2</div>
        </div>
      </div>
    </div>
  );
};
