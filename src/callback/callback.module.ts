import { Module } from '@nestjs/common';
import { ActorModule } from '../actor/actor.module.js';
import { CallbackController } from './callback.controller.js';
import { CallbackService } from './callback.service.js';

@Module({
  controllers: [CallbackController],
  imports: [ActorModule],
  providers: [CallbackService],
})
export class CallbackModule {}
