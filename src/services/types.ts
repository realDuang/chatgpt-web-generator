import type {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
  ImagesResponseDataInner,
} from "openai";

export const IOpenaiService = Symbol("IOpenaiService");
export interface IOpenaiService {
  generateText(
    completionData: Partial<CreateCompletion>
  ): Promise<string | undefined>;
  generateAnswer(
    chatCompletion: Partial<CreateChatCompletion>
  ): Promise<ChatCompletionResponseMessage | undefined>;
  createImage(
    createImage: Partial<CreateImage>
  ): Promise<ImagesResponseDataInner[]>;
}

export interface CreateImage {
  prompt: string;
  n?: number;
  size?: ImageSize;
  response_format?: RespFormat;
}

export interface CreateChatCompletion {
  model: ChatCompletionModelEnum;
  messages: ChatCompletionRequestMessage[];
  temperature?: number;
}

export interface CreateCompletion {
  model: "text-davinci-003";
  prompt: string;
  max_tokens?: number;
  temperature: number;
}

export interface CreateTranscription {
  file: File;
  model: string;
  prompt?: string;
  responseFormat?: string;
  temperature?: number;
  language?: string;
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

export enum ChatCompletionModelEnum {
  'gpt-3.5-turbo' = 'gpt-3.5-turbo',
  'gpt-4' = 'gpt-4',
  'gpt-4-32k' = 'gpt-4-32k',
}
