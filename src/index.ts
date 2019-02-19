import * as path from 'path';

import { ApolloServer } from 'apollo-server-lambda';
import { applyMiddleware } from 'graphql-middleware';
import { makePrismaSchema } from 'nexus-prisma';
import datamodelInfo from './generated/nexus-prisma';
import { permissions } from './permissions';
import * as allTypes from './resolvers';
import { Prisma, prisma } from './generated/prisma-client';

const prismaInstance = (): Prisma =>
  new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT,
    debug: process.env.NODE_ENV !== 'production', // log all GraphQL queries & mutations sent to the Prisma API
    secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
  });

const schema = applyMiddleware(
  makePrismaSchema({
    // Provide all the GraphQL types we've implemented
    types: allTypes,

    // Configure the interface to Prisma
    prisma: {
      datamodelInfo,
      client: prisma,
    },

    // Specify where Nexus should put the generated files
    outputs: {
      schema: path.resolve('./src/generated/schema.graphql'),
      typegen: path.resolve('./src/generated/nexus.ts'),
    },

    // Configure nullability of input arguments: All arguments are non-nullable by default
    nonNullDefaults: {
      input: false,
      output: false,
    },

    // Configure automatic type resolution for the TS representations of the associated types
    typegenAutoConfig: {
      sources: [
        {
          source: path.resolve('./src/types.ts'),
          alias: 'types',
        },
      ],
      contextType: 'types.Context',
    },
  }),

  // Add permissions
  permissions
);

const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    prisma: prismaInstance(),
  }),
});

exports.handler = server.createHandler();
