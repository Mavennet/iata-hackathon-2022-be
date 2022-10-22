import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Credential {
  @Prop()
  id: string;

  @Prop()
  issuer: string;

  @Prop({ type: JSON })
  credentialSubject: CredentialSubject;

  @Prop()
  type: string[];
}

type CredentialSubject = {
  id: string;
  type: string;
  pieceId: string;
  transportMeans: string;
};

export type CredentialDocument = Credential & Document;

export const CredentialSchema = SchemaFactory.createForClass(Credential);
