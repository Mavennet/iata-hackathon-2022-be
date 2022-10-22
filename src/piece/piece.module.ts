import { Module } from '@nestjs/common';
import { CredentialModule } from '../credential/credential.module.js';
import { PieceController } from './piece.controller.js';

@Module({
  imports: [CredentialModule],
  controllers: [PieceController],
})
export class PieceModule {}
