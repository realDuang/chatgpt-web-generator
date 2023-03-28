import { FC, useState } from "react";
import ChatWindow from "./chatWindow/";
import { MenuView } from "./MenuView";

const Chat: FC = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      <MenuView />
      <ChatWindow />
    </div>
  );
};

export default Chat;
