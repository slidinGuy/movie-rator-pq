# Simple GraphQL demo for profiq

This app consist of a minimal backend using `graphql-yoga` and [Prisma](https://www.prisma.io/) to provide a [GraphQL](https://graphql.org/) API, and a simple React client using [Apollo](https://www.apollographql.com/) as the GraphQL library.

## Installing the project
To run the project, first install the dependencies:
```bash
yarn install
cd server && yarn install
```
Then install prisma and graphql globaly for the CLI tools:
```bash
yarn global add prisma graphql
```
Deploy prisma (it will ask you to register/login)
```bash
# back in the project root
prisma deploy
```
Copy the endpoint you'll get on stdout to `server/database/prisma.yml` and `server/index.js`

## Running the project
Just start the server and then the client app:
```bash
node server/index.js
# in a different terminal
yarn start
```
If you'd like to play with the GraphQL playground, start it with (default port is 3000, specify a different one if your client app is running):
```bash
graphql playground --port 1234
```