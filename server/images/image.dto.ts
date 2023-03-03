import { ImageSize, RespFormat } from './interfaces';

export class CreateImageDto {
  prompt: string;
  n?: number;
  size?: ImageSize;
  response_format?: RespFormat;
}
