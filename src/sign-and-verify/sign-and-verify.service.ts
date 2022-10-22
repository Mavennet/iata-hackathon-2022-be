import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { issue, verifyCredential } from '@digitalbazaar/vc';
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
import { documentLoader } from '@mavennet/document-loader';
import { ActorService } from '../actor/actor.service.js';

@Injectable()
export class SignAndVerifyService {
  constructor(private readonly actorService: ActorService) {}

  async getKey(actorId): Promise<any> {
    // const key = await generate({ seed });
    const { privateKey, publicKey } = await this.actorService.findOne(actorId);
    return new Ed25519VerificationKey2020({
      publicKeyMultibase: publicKey,
      privateKeyMultibase: privateKey,
    });
  }

  async getSuite(actorId): Promise<any> {
    const key = await this.getKey(actorId);
    return new Ed25519Signature2020({
      signer: this.getKey(key),
      date: new Date().toISOString(),
    });
  }

  async signVC(objectToSign, actorId): Promise<any> {
    const suite = this.getSuite(actorId);
    const { credential } = await issue({
      credential: objectToSign,
      suite,
      documentLoader,
    });

    return credential;
  }

  verifyVC(objectToVerify): any {
    return verifyCredential(objectToVerify);
  }
}
