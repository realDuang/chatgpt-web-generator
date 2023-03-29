import { FC } from "react";

import "reflect-metadata";
import { Container } from "inversify";
import { Provider } from "inversify-react";

import { RecoilRoot } from "recoil";

import Chat from "./components";
import { IOpenaiService } from "./services/types";
import { OpenaiService } from "./services/openai";

const App: FC = () => {
  return (
    <RecoilRoot>
      <Provider container={containerGenerator}>
        <Chat />;
      </Provider>
    </RecoilRoot>
  );
};

const containerGenerator = () => {
  const container = new Container();
  container.bind<IOpenaiService>(IOpenaiService).to(OpenaiService);
  return container;
};

export default App;
