import { Injectable } from '@nestjs/common';
import { ActorService } from '../actor/actor.service.js';

@Injectable()
export class CallbackService {
  constructor(private readonly actorService: ActorService) {}

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
  };
  signTransportMovement = async (body, topic) => {
    const credentialSubject =
      body[`https://onerecord.iata.org/api/Notification#${topic}`];
    const actor = await this.actorService.findOne(
      body[
        'https://onerecord.iata.org/cargo/TransportMovement#companyIdentifier'
      ],
    );
    console.log({ actor });
    console.log({ credentialSubject });
  };
}
