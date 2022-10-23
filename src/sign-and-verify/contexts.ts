const didConstants = {
  DID_CONTEXT_V1_URL: 'https://www.w3.org/ns/did/v1',
};

const securityConstants = {
  ED25519_2018_v1_URL: 'https://w3id.org/security/suites/ed25519-2018/v1',
  ED25519_2020_v1_URL: 'https://w3id.org/security/suites/ed25519-2020/v1',
};

const credentialConstants = {
  CREDENTIALS_CONTEXT_V1_URL: 'https://www.w3.org/2018/credentials/v1',
};

const traceabilityConstants = {
  TRACEABILITY_CONTEXT: 'https://w3id.org/traceability/v1',
};

const revocationConstants = {
  REVOCATION_2020: 'https://w3id.org/vc-revocation-list-2020/v1',
};

const mavennetContext = {
  MAVENNET_CONTEXT_V1: 'https://mavennet.github.io/contexts/v1.jsonld',
  MAVENNET_CONTEXT_V2: 'https://mavennet.github.io/contexts/v2.jsonld',
};

const didConfigurationContext = {
  DID_CONFIG_CONTEXT:
    'https://identity.foundation/.well-known/contexts/did-configuration-v0.2.jsonld',
};

const schemaOrgContext = {
  SCHEMA_ORG_CONTEXT:
    'https://schema.org/version/latest/schemaorg-current-https.jsonld',
};

const iataContext = {
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
};

export const contexts: any = {
  [didConstants.DID_CONTEXT_V1_URL]: didConstants.DID_CONTEXT_V1_URL,
  [securityConstants.ED25519_2018_v1_URL]:
    securityConstants.ED25519_2018_v1_URL,
  [securityConstants.ED25519_2020_v1_URL]:
    securityConstants.ED25519_2020_v1_URL,
  [credentialConstants.CREDENTIALS_CONTEXT_V1_URL]:
    credentialConstants.CREDENTIALS_CONTEXT_V1_URL,
  [revocationConstants.REVOCATION_2020]: revocationConstants.REVOCATION_2020,
  [traceabilityConstants.TRACEABILITY_CONTEXT]:
    traceabilityConstants.TRACEABILITY_CONTEXT,
  [mavennetContext.MAVENNET_CONTEXT_V1]: mavennetContext.MAVENNET_CONTEXT_V1,
  [mavennetContext.MAVENNET_CONTEXT_V2]: mavennetContext.MAVENNET_CONTEXT_V2,
  [didConfigurationContext.DID_CONFIG_CONTEXT]:
    didConfigurationContext.DID_CONFIG_CONTEXT,
  'https://schema.org/': schemaOrgContext.SCHEMA_ORG_CONTEXT,
  'https://onerecord.iata.org': iataContext,
};
