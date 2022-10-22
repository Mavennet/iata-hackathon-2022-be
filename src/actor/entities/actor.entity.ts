import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Actor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  publicKey: string;

  @Prop({ required: true })
  privateKey: string;
}

export type ActorDocument = Actor & Document;

export const ActorSchema = SchemaFactory.createForClass(Actor);
