import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialModule } from './credential/credential.module';
import { ActorModule } from './actor/actor.module';
import { CallbackModule } from './callback/callback.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://iata_admin:zldRF7b4x2DiWkqD@iata-onerecord.awditfv.mongodb.net/iata-be?retryWrites=true&w=majority',
    ),
    CredentialModule,
    ActorModule,
    CallbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
