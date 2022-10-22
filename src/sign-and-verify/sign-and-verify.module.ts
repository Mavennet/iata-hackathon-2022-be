import { Global, Module } from '@nestjs/common';
import { SignAndVerifyService } from './sign-and-verify.service.js';
import { ActorModule } from '../actor/actor.module.js';

@Global()
@Module({
  imports: [ActorModule],
  providers: [SignAndVerifyService],
  exports: [SignAndVerifyService],
})
export class SignAndVerifyModule {}
