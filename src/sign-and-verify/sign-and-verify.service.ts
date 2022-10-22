import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { issue, verifyCredential } from '@digitalbazaar/vc';
import {
  Ed25519Signature2020,
  generate,
} from '@digitalbazaar/ed25519-signature-2020';
import { documentLoader } from '@mavennet/document-loader';
import {} from 'node:crypto';

@Injectable()
export class SignAndVerifyService {
  async getKey(seed: string): Promise<any> {
    const key = await generate({ seed });
    return key;
  }

  getSuite({ pvtKey, created }: any): any {
    return new Ed25519Signature2020({
      signer: this.getKey(pvtKey),
      date: created,
    });
  }

  async signVC(objectToSign, pvtKey): any {
    const suite = this.getSuite({ pvtKey, created: new Date().toISOString() });
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
