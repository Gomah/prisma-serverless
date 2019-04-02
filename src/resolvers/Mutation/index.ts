import { stringArg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

// Account
import { login } from './account/login';
import { signup } from './account/signup';

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t => {
    t.prismaFields(['*']);

    t.field('signup', {
      type: 'AuthPayload',
      args: {
        firstName: stringArg({ nullable: true }),
        lastName: stringArg({ nullable: true }),
        phone: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: signup,
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: login,
    });
  },
});
