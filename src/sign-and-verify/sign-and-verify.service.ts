import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { issue, verifyCredential } from '@digitalbazaar/vc';
import {
  Ed25519Signature2020,
  generate,
} from '@digitalbazaar/ed25519-signature-2020';
import {} from 'node:crypto';

type keyObj = {
  id: string;
  controller: string;
  type: string;
  privateKeyMultibase: string;
  publicKeyMultibase: string;
};

@Injectable()
export class SignAndVerifyService implements OnApplicationBootstrap {
  async onApplicationBootstrap(): Promise<void> {
    console.log('HIIIII');
    const seed =
      'zrv3iHrreA4mhBgFYgGT6MvyjsP1jFKa6cD4fdXghomRSHoRawyGDzLzZJTWGaQEpdwWtA4nnzxDG775HW9FBdqT3cE';
    const keyPair = await generate({ seed });
    console.log(keyPair);
    // console.log(key);
  }
  getKey(): keyObj {
    return {
      id: `did:key:${process.env['ISSUER_PBL_KEY_AIRLINE']}#${process.env['ISSUER_PBL_KEY_AIRLINE']}`,
      controller: `did:key:${process.env['ISSUER_PBL_KEY_AIRLINE']}`,
      type: 'Ed25519VerificationKey2020',
      privateKeyMultibase: `${process.env['ISSUER_PBL_KEY_AIRLINE']}`,
      publicKeyMultibase: `${process.env['ISSUER_PBL_KEY_AIRLINE']}`,
    };
  }

  getSuite({ created }: any): any {
    return new Ed25519Signature2020({
      signer: this.getKey(),
      date: created,
    });
  }

  issueVC(objectToIssue): any {
    return issue(objectToIssue);
  }

  verifyVC(objectToVerify): any {
    return verifyCredential(objectToVerify);
  }
}
