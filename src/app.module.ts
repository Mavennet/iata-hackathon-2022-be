import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PieceModule } from './piece/piece.module.js';
import { SignAndVerifyModule } from './sign-and-verify/sign-and-verify.module.js';
import { SignAndVerifyService } from './sign-and-verify/sign-and-verify.service.js';

@Module({
  imports: [PieceModule, SignAndVerifyModule],
  controllers: [AppController],
  providers: [AppService, SignAndVerifyService],
})
export class AppModule {}
