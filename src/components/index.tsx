import { FC } from "react";

import ChatWindow from "./chatWindow";
import { Menu } from "./menu";

const Chat: FC = () => {
  return (
    <div className="relative w-full h-[94vh]">
      <Menu />
      <ChatWindow />
    </div>
  );
};

export default Chat;
