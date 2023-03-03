import type { ChatCompletionRequestMessage } from 'openai';

export class CreateChatCompletionDto {
  model: 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0301';
  messages: ChatCompletionRequestMessage[];
  temperature?: number;
}

export class CreateCompletionDto {
  model: 'text-davinci-003';
  prompt: string;
  max_tokens?: number;
  temperature: number;
}
