import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActorDto } from './dto/create-actor.dto.js';
import { Actor, ActorDocument } from './entities/actor.entity.js';

@Injectable()
export class ActorService {
  constructor(
    @InjectModel(Actor.name)
    private actorModel: Model<ActorDocument>,
  ) {}

  async create(createActorDto: CreateActorDto) {
    const actor = new this.actorModel(createActorDto);
    return await actor.save();
  }

  async findAll() {
    return await this.actorModel.find().exec();
  }

  async findOne(id: number) {
    return await this.actorModel.findById(id).exec();
  }

  async remove(id: number) {
    return await this.actorModel.findByIdAndDelete(id);
  }
}
