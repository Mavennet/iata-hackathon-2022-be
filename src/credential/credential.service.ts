import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import {
  Credential,
  CredentialDocument,
} from './entities/credential.entity.js';

@Injectable()
export class CredentialService {
  constructor(
    @InjectModel(Credential.name)
    private credentialModel: Model<CredentialDocument>,
  ) {}

  async create(createCredentialDto: CreateCredentialDto) {
    const credential = new this.credentialModel(createCredentialDto);
    return await credential.save();
  }

  async findAll() {
    const credentials = await this.credentialModel.find().exec();
    return credentials;
  }

  async findAllWithPieceId(pieceId: string) {
    return await this.credentialModel
      .find({
        $or: [
          { 'credentialSubject.@id': pieceId },
          {
            'credentialSubject.iata:transportMovement:transportedPieces.@id':
              pieceId,
          },
        ],
      })
      .exec();
  }

  async findOne(id: string) {
    return await this.credentialModel
      .find({
        $or: [{ 'credentialSubject.pieceId': id }],
      })
      .exec();
  }

  async remove(id: number) {
    return await this.credentialModel.findByIdAndDelete(id);
  }
}
