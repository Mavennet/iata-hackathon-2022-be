# Readme

## Introduction

The software is built on top of NestJs and uses MongoDB as a database, and incorporates W3C DIDs and VCs.

The app expects a notification from the Iata One Record API to a webhook.

The notification type is filtered based on topics, currently it only supports a "TransportMovement" topic.

Once a transport movement notification is provided, the app will parse the notification, and attempt to find the airline and airline that is associated with the movement.

The airplane signs the transport movement and generates a "transport movement credential"

The airline then calculates the emissions per package, and signs a "piece emissions credential".
This credential is used to associate a piece with a movement.

These credentials are then stored in the db.

The frontend is able to then access these credentials by providing the id of the piece that is in question to find its total emissions and the number of transport movements it has undergone.

As this is a demo application private/public keys are stored in a centralized DB and are NOT excpected to be secure.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start:dev
```

## License

Nest is [MIT licensed](LICENSE).
