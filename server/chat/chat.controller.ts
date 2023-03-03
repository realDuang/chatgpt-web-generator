import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionDto, CreateCompletionDto } from './chat.dto';
import { OpenaiService } from 'server/openai/openai.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chatCompletions')
  public async chatCompletions(@Body() params: any) {
    if (!params.messages) return;

    const { model = 'gpt-3.5-turbo', messages, temperature } = params;
    const chatCompletionDto: CreateChatCompletionDto = {
      model,
      messages,
      temperature,
    };
    return this.openaiService.generateAnswer(chatCompletionDto);
  }

  @Post('completions')
  public async completions(@Body() params: any) {
    if (!params.prompt) return;

    const {
      model = 'text-davinci-003',
      prompt,
      temperature,
      max_tokens,
    } = params;
    const completionDto: CreateCompletionDto = {
      model,
      prompt,
      temperature,
      max_tokens,
    };
    return this.openaiService.generateText(completionDto);
  }
}
