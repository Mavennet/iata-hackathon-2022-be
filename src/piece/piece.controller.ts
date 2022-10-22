import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PieceService } from './piece.service.js';
import { CreatePieceDto } from './dto/create-piece.dto.js';
import { UpdatePieceDto } from './dto/update-piece.dto.js';

@Controller('piece')
export class PieceController {
  constructor(private readonly pieceService: PieceService) {}

  @Post()
  create(@Body() createPieceDto: CreatePieceDto) {
    return this.pieceService.create(createPieceDto);
  }

  @Get()
  findAll() {
    return this.pieceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pieceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePieceDto: UpdatePieceDto) {
    return this.pieceService.update(+id, updatePieceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pieceService.remove(+id);
  }
}
