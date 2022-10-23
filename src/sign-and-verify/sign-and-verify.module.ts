import { Global, Module } from '@nestjs/common';
import { SignAndVerifyService } from './sign-and-verify.service.js';
import { ActorModule } from '../actor/actor.module.js';
import { CredentialModule } from '../credential/credential.module.js';

@Global()
@Module({
  imports: [ActorModule, CredentialModule],
  providers: [SignAndVerifyService],
  exports: [SignAndVerifyService],
})
export class SignAndVerifyModule {}
