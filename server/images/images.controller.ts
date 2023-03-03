import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageDto } from 'server/images/image.dto';
import { OpenaiService } from 'server/openai/openai.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('create')
  public async createImage(@Body() params: any) {
    if (!params || !params.prompt) return;

    const { prompt, n, size, response_format } = params;
    const createImageDto: CreateImageDto = {
      prompt,
      n,
      size,
      response_format,
    };
    return this.openaiService.createImage(createImageDto);
  }
}
