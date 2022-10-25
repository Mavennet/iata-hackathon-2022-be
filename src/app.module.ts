import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialModule } from './credential/credential.module.js';
import { ActorModule } from './actor/actor.module.js';
import { SignAndVerifyModule } from './sign-and-verify/sign-and-verify.module.js';
import { CallbackModule } from './callback/callback.module.js';
import { PieceModule } from './piece/piece.module.js';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URL,
    ),
    CredentialModule,
    ActorModule,
    SignAndVerifyModule,
    CallbackModule,
    PieceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
