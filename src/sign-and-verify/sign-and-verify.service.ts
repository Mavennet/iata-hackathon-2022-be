import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { issue, verifyCredential } from '@digitalbazaar/vc';
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
// import { documentLoader } from '@mavennet/document-loader';

import { documentLoader } from './documentLoader.js';
import { ActorService } from '../actor/actor.service.js';
import { CredentialService } from '../credential/credential.service.js';

@Injectable()
export class SignAndVerifyService {
  constructor(
    private readonly actorService: ActorService,
    private readonly credentialService: CredentialService,
  ) {}

  async getKey(actor): Promise<any> {
    const { privateKey, publicKey } = actor;

    return new Ed25519VerificationKey2020({
      id: `did:key:${publicKey}#${publicKey}`,
      controller: `did:key:${publicKey}`,
      publicKeyMultibase: publicKey,
      privateKeyMultibase: privateKey,
    });
  }

  async getSuite(actor): Promise<any> {
    const key = await this.getKey(actor);
    return new Ed25519Signature2020({
      key,
      date: new Date().toISOString(),
    });
  }

  async signVC(objectToSign, actor): Promise<any> {
    const suite = await this.getSuite(actor);
    const unsignedCredential = this.constructCredential(objectToSign, actor);
    const credential = await issue({
      credential: unsignedCredential,
      suite,
      documentLoader,
    });
    await this.credentialService.create(credential);

    return credential;
  }

  constructCredential(objectToSign, actor) {
    return {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://onerecord.iata.org',
      ],
      type: ['VerifiableCredential'],
      issuer: `did:key:${actor.publicKey}`,
      credentialSubject: objectToSign,
    };
  }

  verifyVC(objectToVerify): any {
    return verifyCredential(objectToVerify);
  }
}
