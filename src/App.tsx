import { FC } from "react";
import Chat from "./components/Chat";

import "reflect-metadata";
import { Container } from "inversify";
import { Provider } from "inversify-react";

import { IOpenaiService } from "./services/types";
import { OpenaiService } from "./services/openai";

const App: FC = () => {
  return (
    <Provider container={containerGenerator}>
      <Chat />;
    </Provider>
  );
};

const containerGenerator = () => {
  const container = new Container();
  container.bind<IOpenaiService>(IOpenaiService).to(OpenaiService);
  return container;
};

export default App;
