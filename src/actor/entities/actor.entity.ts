import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Actor {
  @Prop()
  name: string;

  @Prop()
  privateKey: string;
}

export type ActorDocument = Actor & Document;

export const ActorSchema = SchemaFactory.createForClass(Actor);
