import { Module } from '@nestjs/common';
import { ActorModule } from '../actor/actor.module.js';
import { SignAndVerifyModule } from '../sign-and-verify/sign-and-verify.module.js';
import { CallbackController } from './callback.controller.js';
import { CallbackService } from './callback.service.js';

@Module({
  imports: [ActorModule, SignAndVerifyModule],
  controllers: [CallbackController],
  providers: [CallbackService],
})
export class CallbackModule {}
