# Prisma Serverless

> Template for Prisma (Nexus) + Typescript + AWS Serverless Lambda = :fireworks:

This boilerplate includes:

- :rocket: [Apollo Server Lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda)
- :zap: [Serverless](https://serverless.com/) with Webpack & Typescript support
- :alembic: [Prisma](https//prisma.io) & CRUD schema generated using [Nexus](https://nexus.js.org/)
- :construction_worker: [CircleCI](https://circleci.com/) configuration to deploy to lambda
- :lock: Basic permissions with [graphql-shield](https://github.com/maticzav/graphql-shield)

There's more to come :eyes:

## Table of contents

- [Project Structure](#project-structure)
- [Quickstart](#quickstart)
- [Deploying](#deploying)

### Project Structure

```bash
.
├── config/                     # Serverless env
├── prisma/                     # Prisma related config & Datamodel
├── src/                        # The magic happens here
│   ├── generated/              # Generated prisma schema & client
│   ├── permissions/            # Resolvers permissions
│   └── resolvers/              # App resolvers
│       ├── Mutation/           # Resolvers mutations
│       └── Query/              # Resolvers queries
├── typings/                    # Typescript generic typings
├── .babelrc                    # babel config
├── .editorconfig               # editor config
├── .eslintrc.js                # eslint config
├── .gitignore                  # git ignore list
├── .nvmrc                      # nvm config
├── .prettierrc                 # Prettier configuration
├── docker-compose.yml          # Docker compose file (for local server)
├── package.json                # build scripts and dependencies
├── README.md                   # This file ;)
├── serverless.yml              # Serverless configuration
├── tsconfig.json               # Typescript configuration
└── yarn.lock                   # yarn lock file
```

### Quickstart

#### Prerequisites

You'll need a prisma server setup to use this template.
You can either create a local prisma server using `Docker`:

```bash
docker-compose up -d
```

Or deploy to a new prisma demo server:

```bash
yarn prisma deploy
```

Then, create an `.env` referencing the prisma endpoint:

```bash
PRISMA_ENDPOINT="http://localhost:4469/app/dev"
PRISMA_SECRET="PRISMA_SECRET"
APP_SECRET="MY_APP_SECRET"
```

- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-tab)
- [Node.js](https://nodejs.org/en/)

```bash
# install dependencies
yarn install

# Run local lambda http environment (API Gateway simulator)
yarn dev

# Run tests
yarn run test

```

---

### Deploying

1. Deploy & Generate the prisma schema based on the datamodel to the prisma server.

```bash
# Deploy the schema to the prisma server & generate prisma client & schema
yarn prisma deploy

# Resolvers deployment

# Deploy (development)
yarn deploy:dev

# Deploy (production)
yarn deploy:prod
```

---

### Help

- [Serverless Documentation](https://serverless.com/framework/docs/)
- [Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1)
