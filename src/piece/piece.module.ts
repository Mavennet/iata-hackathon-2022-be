import { Module } from '@nestjs/common';
import { PieceService } from './piece.service.js';
import { PieceController } from './piece.controller.js';

@Module({
  controllers: [PieceController],
  providers: [PieceService],
})
export class PieceModule {}
