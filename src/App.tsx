import { FC } from "react";
import ChatGPTChatWindow from "./components/chatWindow/ChatGPTChatWindow";

import "reflect-metadata";
import { Container } from "inversify";
import { Provider, useInjection } from "inversify-react";

import { IOpenaiService } from "./services/types";
import { OpenaiService } from "./services/openai";

const App: FC = () => {
  return (
    <Provider container={containerGenerator}>
      <ChatGPTChatWindow />;
    </Provider>
  );
};

const containerGenerator = () => {
  const container = new Container();
  container.bind<IOpenaiService>(IOpenaiService).to(OpenaiService);
  return container;
};

export default App;
