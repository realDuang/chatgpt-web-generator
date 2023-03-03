import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { OpenaiService } from 'server/openai/openai.service';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', '..', 'client'),
    }),
  ],
  controllers: [WebController],
  providers: [OpenaiService],
})
export class WebModule {}
