import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service.js';
import { CredentialController } from './credential.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Credential, CredentialSchema } from './entities/credential.entity.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Credential.name, schema: CredentialSchema },
    ]),
  ],
  controllers: [CredentialController],
  providers: [CredentialService],
  exports: [CredentialService],
})
export class CredentialModule {}
