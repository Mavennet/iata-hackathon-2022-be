import { Controller, Get, Param } from '@nestjs/common';
import { CredentialService } from '../credential/credential.service.js';

@Controller('piece')
export class PieceController {
  constructor(private readonly credentialService: CredentialService) {}
  @Get('/:id')
  async getPieceCredentials(@Param('id') id) {
    return await this.credentialService.findAllWithPieceId(id);
  }
}
