import { Configuration, OpenAIApi } from "openai";
import { injectable } from "inversify";
import {
  CreateCompletion,
  CreateChatCompletion,
  CreateImage,
  IOpenaiService,
} from "./types";

const configuration = new Configuration({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

@injectable()
export class OpenaiService implements IOpenaiService {
  public openai: OpenAIApi;
  constructor() {
    this.openai = new OpenAIApi(configuration);
  }

  public async generateText(completionData: CreateCompletion) {
    const completion = await this.openai.createCompletion(completionData);
    return completion.data.choices[0].text;
  }

  public async generateAnswer(chatCompletion: CreateChatCompletion) {
    const completion = await this.openai.createChatCompletion(chatCompletion);
    return completion.data.choices[0].message;
  }

  public async createImage(createImage: CreateImage) {
    const resp = await this.openai.createImage(createImage);
    return resp.data.data;
  }
}
