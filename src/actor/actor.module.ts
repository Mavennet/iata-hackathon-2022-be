import { Module } from '@nestjs/common';
import { ActorService } from './actor.service.js';
import { ActorController } from './actor.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from './entities/actor.entity.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
  ],
  controllers: [ActorController],
  providers: [ActorService],
  exports: [ActorService],
})
export class ActorModule {}
