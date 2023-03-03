import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { OpenaiService } from './openai/openai.service';
import { ImagesController } from './images/images.controller';
import { ChatController } from './chat/chat.controller';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    WebModule,
  ],
  controllers: [ImagesController, ChatController],
  providers: [OpenaiService],
})
export class AppModule {}
