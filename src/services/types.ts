import type {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
  ImagesResponseDataInner,
} from "openai";

export const IOpenaiService = Symbol("IOpenaiService");
export interface IOpenaiService {
  generateText(completionData: CreateCompletion): Promise<string | undefined>;
  generateAnswer(
    chatCompletion: CreateChatCompletion
  ): Promise<ChatCompletionResponseMessage | undefined>;
  createImage(createImage: CreateImage): Promise<ImagesResponseDataInner[]>;
}

export interface CreateImage {
  prompt: string;
  n?: number;
  size?: ImageSize;
  response_format?: RespFormat;
}

export interface CreateChatCompletion {
  model: "gpt-3.5-turbo" | "gpt-3.5-turbo-0301";
  messages: ChatCompletionRequestMessage[];
  temperature?: number;
}

export interface CreateCompletion {
  model: "text-davinci-003";
  prompt: string;
  max_tokens?: number;
  temperature: number;
}

export enum RespFormat {
  Url = "url",
  Base64 = "b64_json",
}

export enum ImageSize {
  Size256 = "256x256",
  Size512 = "512x512",
  Size1024 = "1024x1024",
}
