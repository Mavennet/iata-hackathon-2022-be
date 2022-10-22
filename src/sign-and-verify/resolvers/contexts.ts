import { contexts } from '@mavennet/vc-contexts';

const unsecureContexts = {
  ...contexts,
  'https://onerecord.iata.org': {
    '@context': {
      '@version': 1.1,
      '@vocab': 'https://onerecord.iata.org/#undefinedTerm',
      transportMovement: {
        '@id': 'https://onerecord.iata.org/cargo/TransportMovement#',
        '@context': {
          arrivalLocation: {
            '@id': 'iata:Location/thisObjectId',
            '@type': 'iata:Location',
          },
          co2Emissions: {
            '@id': 'iata:CO2Emissions/thisObjectId',
            '@type': 'iata:CO2Emissions',
          },
          departureLocation: {
            '@id': 'iata:Location/thisObjectId',
            '@type': 'iata:Location',
          },
          distanceCalculated: {
            '@id': 'iata:Value/thisObjectId',
            '@type': 'iata:Value',
          },
          distanceMeasured: {
            '@id': 'iata:Value/thisObjectId',
            '@type': 'iata:Value',
          },
          externalReferences: {
            '@id': 'iata:ExternalReference/thisObjectId',
            '@type': 'iata:ExternalReference',
          },
          fuelAmountCalculated: {
            '@id': 'iata:Value/thisObjectId',
            '@type': 'iata:Value',
          },
          fuelAmountMeasured: {
            '@id': 'iata:Value/thisObjectId',
            '@type': 'iata:Value',
          },
          movementTimes: {
            '@id': 'iata:MovementTimes/thisObjectId',
            '@type': 'iata:MovementTimes',
          },
          payload: {
            '@id': 'iata:Value/thisObjectId',
            '@type': 'iata:Value',
          },
          transportMeans: {
            '@id': 'iata:TransportMeans/thisObjectId',
            '@type': 'iata:TransportMeans',
          },
          transportMeansOperators: {
            '@id': 'iata:Person/thisObjectId',
            '@type': 'iata:Person',
          },
          transportedPieces: {
            '@id': 'iata:Piece/thisObjectId',
            '@type': 'iata:Piece',
          },
          transportedUlds: {
            '@id': 'iata:ULD/thisObjectId',
            '@type': 'iata:ULD',
          },
          fuelType: 'string',
          modeCode: 'string',
          modeQualifier: 'string',
          seal: 'string',
          transportIdentifier: 'string',
          unplannedStop: 'string',
        },
      },
      piece: {
        '@id': 'https://onerecord.iata.org/cargo/Piece#',
        '@context': {
          iata: 'https://onerecord.iata.org/',
          bookingOption: {
            '@id': 'iata:BookingOption/thisObjectId',
            '@type': 'iata:BookingOption',
          },
          bookingRef: {
            '@id': 'iata:Booking/thisObjectId',
            '@type': 'iata:Booking',
          },
          ratings: {
            '@id': 'iata:Ratings/thisObjectId',
            '@type': 'iata:Ratings',
          },
        },
        '@type': 'iata:Piece',
      },
    },
  },
};

export const contextResolver = async (iri) => {
  if (unsecureContexts[iri]) {
    return unsecureContexts[iri];
  }
  console.log('contextResolver: iri', iri);
  return undefined;
};
