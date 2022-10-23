import { Injectable } from '@nestjs/common';
import { ActorService } from '../actor/actor.service.js';
import { SignAndVerifyService } from '../sign-and-verify/sign-and-verify.service.js';

@Injectable()
export class CallbackService {
  constructor(
    private readonly actorService: ActorService,
    private readonly signAndVerifyService: SignAndVerifyService,
  ) {}

  signTransportMovement = async (body, topic) => {
    const transportMovement =
      body[`https://onerecord.iata.org/api/Notification#${topic}`];

    const transportPieces =
      transportMovement['iata:transportMovement:transportedPieces'];

    const airplane = transportMovement['iata:transportMovement:transportMeans'];
    const movementActor = await this.actorService.findByName(airplane);

    const movementCredential = await this.signAndVerifyService.signVC(
      transportMovement,
      movementActor,
    );

    const airlineActor = await this.actorService.findByName(
      transportMovement[
        'https://onerecord.iata.org/cargo/TransportMovement#companyIdentifier'
      ],
    );

    //calculate the total weight of the transport movement
    const totalWeight = transportPieces.reduce((acc, piece) => {
      return acc + piece.volumetricWeight;
    }, 0);

    const pieceCredentials = await Promise.all(
      transportPieces.map(async (p) => {
        const pieceWithEmissions = {
          ...p,

          'iata:co2Emissions:calculatedEmissions': {
            '@type': 'iata:CO2Emissions',
            calculatedEmissions:
              (p.volumetricWeight / totalWeight) *
              transportMovement['iata:transportMovement:co2Emissions']
                .calculatedEmissions,
          },
        };
        return await this.signAndVerifyService.signVC(
          pieceWithEmissions,
          airlineActor,
        );
      }),
    );

    return [movementCredential, ...pieceCredentials];
  };
}
