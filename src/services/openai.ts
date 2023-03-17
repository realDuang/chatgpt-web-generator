import { Configuration, OpenAIApi } from "openai";
import { injectable } from "inversify";
import {
  CreateCompletion,
  CreateChatCompletion,
  CreateImage,
  IOpenaiService,
  ImageSize,
  RespFormat,
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

  public async generateText(completionData: Partial<CreateCompletion>) {
    if (!completionData.prompt) return;

    const {
      model = "text-davinci-003",
      prompt,
      max_tokens,
      temperature = 0.5,
    } = completionData;
    const completion = await this.openai.createCompletion({
      model,
      prompt,
      max_tokens,
      temperature,
    });
    return completion.data.choices[0].text;
  }

  public async generateAnswer(chatCompletion: Partial<CreateChatCompletion>) {
    if (!chatCompletion.messages) return;

    const { model = "gpt-3.5-turbo", messages, temperature } = chatCompletion;

    const completion = await this.openai.createChatCompletion({
      model,
      messages,
      temperature,
    });
    return completion.data.choices[0].message;
  }

  public async createImage(createImage: CreateImage) {
    if (!createImage.prompt) return [];

    const {
      prompt,
      n = 1,
      size = ImageSize.Size256,
      response_format = RespFormat.Url,
    } = createImage;

    const resp = await this.openai.createImage({
      prompt,
      n,
      size,
      response_format,
    });
    return resp.data.data;
  }
}
