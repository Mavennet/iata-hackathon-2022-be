import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CredentialService } from './credential.service.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';

@Controller('credential')
export class CredentialController {
  constructor(private readonly credentialService: CredentialService) {}

  @Post()
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialService.create(createCredentialDto);
  }

  @Get('')
  findAll(@Query('id') id: string) {
    return this.credentialService.findAllWithPieceId('iata:Piece/' + id);
  }

  @Get('')
  findOne(@Param('id') id: string) {
    return this.credentialService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credentialService.remove(+id);
  }
}
