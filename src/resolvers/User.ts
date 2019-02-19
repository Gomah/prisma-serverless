import { prismaObjectType } from 'nexus-prisma';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'firstName', 'lastName', 'email', 'phone']);
  },
});
