import { ChatCompletionModelEnum } from "@/services/types";
import {
  FeatureEnum,
  currentChatCompletionModelState,
  currentFeatureState,
} from "@/store/settings";
import type { FC } from "react";
import { useRecoilState } from "recoil";

export const SettingsList: FC = () => {
  const [chatModel, setChatModel] = useRecoilState(
    currentChatCompletionModelState
  );

  const [feature, setFeature] = useRecoilState(currentFeatureState);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-2">
        <div className="py-2 text-gray-400">小助手功能</div>
        <select
          value={feature}
          onChange={(e) => setFeature(e.target.value as FeatureEnum)}
          className="block w-full bg-gray-700 px-4 py-2 rounded shadow"
        >
          <option value={FeatureEnum.Chat}>聊天</option>
          <option value={FeatureEnum.Image}>图像生成</option>
        </select>
      </div>

      {feature === FeatureEnum.Chat && (
        <div className="px-4 py-2">
          <div className="py-2 text-gray-400">GPT 聊天模型</div>
          <select
            value={chatModel}
            onChange={(e) =>
              setChatModel(e.target.value as ChatCompletionModelEnum)
            }
            className="block w-full bg-gray-700 px-4 py-2 rounded shadow"
          >
            <option value={ChatCompletionModelEnum["gpt-3.5-turbo"]}>
              gpt-3.5-turbo
            </option>
            <option value={ChatCompletionModelEnum["gpt-4"]}>gpt-4</option>
            <option value={ChatCompletionModelEnum["gpt-4-32k"]}>
              gpt-4-32k
            </option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SettingsList;
