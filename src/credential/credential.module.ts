import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CredentialController } from './credential.controller';
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
})
export class CredentialModule {}
