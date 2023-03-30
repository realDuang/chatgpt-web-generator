import { ChatCompletionModelEnum } from "@/services/types";
import { atom } from "recoil";

export enum MenuTabEnum {
  ChatList = "ChatList",
  Settings = "Settings",
}

export enum FeatureEnum {
  Chat = "Chat",
  Image = "Image",
}

export const currentChatCompletionModelState = atom<ChatCompletionModelEnum>({
  key: "currentModel",
  default: ChatCompletionModelEnum["gpt-3.5-turbo"],
});

export const currentMenuTabState = atom<MenuTabEnum>({
  key: "currentMenuTab",
  default: MenuTabEnum.ChatList,
});

export const currentFeatureState = atom<FeatureEnum>({
  key: "currentFeature",
  default: FeatureEnum.Chat,
});
