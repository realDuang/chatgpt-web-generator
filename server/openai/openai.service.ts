import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import {
  CreateChatCompletionDto,
  CreateCompletionDto,
} from 'server/chat/chat.dto';
import { CreateImageDto } from 'server/images/image.dto';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

@Injectable()
export class OpenaiService {
  public openai: OpenAIApi;
  constructor() {
    this.openai = new OpenAIApi(configuration);
  }

  public async generateText(completionDto: CreateCompletionDto) {
    const completion = await this.openai.createCompletion(completionDto);
    return completion.data.choices[0].text;
  }

  public async generateAnswer(chatCompletionDto: CreateChatCompletionDto) {
    const completion = await this.openai.createChatCompletion(
      chatCompletionDto,
    );
    return completion.data.choices[0].message;
  }

  public async createImage(createImageDto: CreateImageDto) {
    const resp = await this.openai.createImage(createImageDto);
    return resp.data.data;
  }
}
