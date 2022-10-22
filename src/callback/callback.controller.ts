import { Body, Controller, Post, Query, Req } from '@nestjs/common';
import { CallbackService } from './callback.service.js';

@Controller('callback')
export class CallbackController {
  constructor(private readonly callbackService: CallbackService) {}

  @Post('/')
  async callback(@Body() body: any, @Query('topic') topic: string) {
    const topics = {
      Piece: async (body, topic) => this.callbackService.signPiece(body, topic),
      TransportMovement: async (body, topic) =>
        this.callbackService.signTransportMovement(body, topic),
    };

    return await topics[topic](body, topic);
  }
}
