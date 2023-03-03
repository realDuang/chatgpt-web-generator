import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateImageDto } from 'server/images/image.dto';
import { ImageSize, RespFormat } from 'server/images/interfaces';
import { OpenaiService } from 'server/openai/openai.service';

@Controller()
export class WebController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get()
  getIndex() {
    return '<h1>Welcome to ChatGPT</h1>';
  }

  @Post()
  async createImage(@Body() params: any) {
    if (!params || !params.prompt) return;

    const { prompt, n, size } = params;
    const createImageDto: CreateImageDto = {
      prompt,
      n: n || 1,
      size: size || ImageSize.Size512,
    };
    const response = await this.openaiService.createImage(createImageDto);
    return response;
  }
}
