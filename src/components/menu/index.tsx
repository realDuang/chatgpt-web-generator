import type { FC } from "react";

import { MenuTab } from "./MenuTab";
import { ChatHistoryList } from "./ChatHistoryList";
import { MenuTabEnum, currentMenuTabState } from "@/store/settings";
import { useRecoilValue } from "recoil";
import SettingsList from "./SettingsList";

export const Menu: FC = () => {
  const currentMenuTab = useRecoilValue(currentMenuTabState);
  return (
    <div className="bg-gray-800 text-white hidden md:fixed md:h-full md:flex md:flex-col md:w-[260px]">
      <MenuTab />
      {currentMenuTab === MenuTabEnum.ChatList && <ChatHistoryList />}
      {currentMenuTab === MenuTabEnum.Settings && <SettingsList />}
    </div>
  );
};
