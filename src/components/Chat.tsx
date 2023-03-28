import { FC, useState } from "react";
import ChatWindow from "./chatWindow/";
import { MenuView } from "./MenuView";

const Chat: FC = () => {
  return (
    <div className="relative w-full h-[95vh]">
      <MenuView />
      <ChatWindow />
    </div>
  );
};

export default Chat;
