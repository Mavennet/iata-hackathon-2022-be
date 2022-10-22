import { Global, Module } from '@nestjs/common';
import { SignAndVerifyService } from './sign-and-verify.service.js';

@Global()
@Module({
  imports: [],
  providers: [SignAndVerifyService],
  exports: [SignAndVerifyService],
})
export class SignAndVerifyModule {}
