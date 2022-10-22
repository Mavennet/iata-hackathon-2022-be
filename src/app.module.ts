import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialModule } from './credential/credential.module.js';
import { ActorModule } from './actor/actor.module.js';
import { SignAndVerifyModule } from './sign-and-verify/sign-and-verify.module.js';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://iata_admin:zldRF7b4x2DiWkqD@iata-onerecord.awditfv.mongodb.net/iata-be?retryWrites=true&w=majority',
    ),
    CredentialModule,
    ActorModule,
    SignAndVerifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
