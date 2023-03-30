import {
  PlusIcon,
  WrenchScrewdriverIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import type { FC } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_MESSAGE, chatHistoriesState } from "@/store/chatHistories";
import { MenuTabEnum, currentMenuTabState } from "@/store/settings";

export const MenuTab: FC = () => {
  const setChatHistories = useSetRecoilState(chatHistoriesState);
  const setCurrentMenuTab = useSetRecoilState(currentMenuTabState);

  return (
    <div className="flex items-center justify-between px-4 h-12 border-b border-gray-700">
      <div className="flex justify-between">
        <div
          className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 text-gray-400 cursor-pointer"
          onClick={() => {
            const uuid = uuidv4();
            setChatHistories((prev) => ({
              ...prev,
              [uuid]: [DEFAULT_MESSAGE],
            }));
          }}
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex justify-between">
        <div
          className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 text-gray-400 cursor-pointer"
          onClick={() => setCurrentMenuTab(MenuTabEnum.ChatList)}
        >
          <ArchiveBoxIcon className="h-6 w-6" />
        </div>
        <div
          className="h-8 w-8 flex items-center justify-center hover:bg-gray-700 text-gray-400 cursor-pointer"
          onClick={() => setCurrentMenuTab(MenuTabEnum.Settings)}
        >
          <WrenchScrewdriverIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
