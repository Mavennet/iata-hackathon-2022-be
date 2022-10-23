import { Body, Controller, Post, Query, Req } from '@nestjs/common';
import { CallbackService } from './callback.service.js';

@Controller('callback')
export class CallbackController {
  constructor(private readonly callbackService: CallbackService) {}

  @Post('/')
  async callback(@Body() body: any, @Query('topic') topic: string) {
    const topics = {
      TransportMovement: async (body, topic) =>
        this.callbackService.signTransportMovement(body, topic),
    };

    // currently only supports TransportMovement, can support other topics by adding to the object above.
    return await topics[topic](body, topic);
  }
}
