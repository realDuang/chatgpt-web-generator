import { FC } from "react";

import ChatWindow from "./chatWindow";
import { MenuView } from "./menu";

const Chat: FC = () => {
  return (
    <div className="relative w-full h-[94vh]">
      <MenuView />
      <ChatWindow />
    </div>
  );
};

export default Chat;
