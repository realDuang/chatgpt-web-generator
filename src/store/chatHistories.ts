import { atom, selectorFamily } from "recoil";
import {
  ChatCompletionRequestMessageRoleEnum,
  ChatCompletionResponseMessage,
} from "openai";
import { v4 as uuidv4 } from "uuid";

export interface IChatHistory {
  [chatId: string]: ChatCompletionResponseMessage[];
}

const DEFAULT_MESSAGE: ChatCompletionResponseMessage = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content: "你好，我是小助手，有什么可以帮到你的吗？",
};

const DEFAULT_UUID = uuidv4();

export const currentChatIdState = atom<string>({
  key: "currentChatId",
  default: DEFAULT_UUID,
});

export const chatHistoriesState = atom<IChatHistory>({
  key: "chatHistories",
  default: {
    [DEFAULT_UUID]: [DEFAULT_MESSAGE],
  },
});

export const chatHistoryState = selectorFamily<
  ChatCompletionResponseMessage[],
  string
>({
  key: "chatHistory",
  get:
    (chatId) =>
    ({ get }) => {
      const chatHistoryRecord = get(chatHistoriesState);
      const chatHistory = chatHistoryRecord[chatId];
      return chatHistory;
    },
  set:
    (chatId) =>
    ({ get, set }, newMessage) => {
      const chatHistories = get(chatHistoriesState);

      set(chatHistoriesState, {
        ...chatHistories,
        [chatId]:
          Array.isArray(newMessage) && newMessage.length !== 0
            ? (newMessage as ChatCompletionResponseMessage[])
            : [DEFAULT_MESSAGE],
      });
      return;
    },
});
