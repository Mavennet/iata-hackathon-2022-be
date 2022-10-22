import { PartialType } from '@nestjs/mapped-types';
import { CreatePieceDto } from './create-piece.dto.js';

export class UpdatePieceDto extends PartialType(CreatePieceDto) {}
