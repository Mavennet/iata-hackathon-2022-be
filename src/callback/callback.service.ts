import { Injectable } from '@nestjs/common';
import { ActorService } from '../actor/actor.service.js';
import { SignAndVerifyService } from '../sign-and-verify/sign-and-verify.service.js';

@Injectable()
export class CallbackService {
  constructor(
    private readonly actorService: ActorService,
    private readonly signAndVerifyService: SignAndVerifyService,
  ) {}

  signPiece = async (body, topic) => {
    const credentialSubject =
      body[`https://onerecord.iata.org/api/Notification#${topic}`];
    const actor = await this.actorService.findOne(
      body[
        'https://onerecord.iata.org/cargo/TransportMovement#companyIdentifier'
      ],
    );
    console.log({ actor });
    console.log({ credentialSubject });
    console.log('signPiece');
    return await this.signAndVerifyService.signVC(credentialSubject, actor);
  };
  signTransportMovement = async (body, topic) => {
    const credentialSubject =
      body[`https://onerecord.iata.org/api/Notification#${topic}`];

    const actor = await this.actorService.findByName(
      credentialSubject[
        'https://onerecord.iata.org/cargo/TransportMovement#companyIdentifier'
      ],
    );
    console.log(credentialSubject);

    return await this.signAndVerifyService.signVC(credentialSubject, actor);
  };
}
