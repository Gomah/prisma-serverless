import { prismaObjectType } from 'nexus-prisma';
import { getUserId } from '../../utils';
import { User } from '../../generated/prisma-client';

export const Query = prismaObjectType({
  name: 'Query',
  definition: (t): void => {
    t.prismaFields(['*']);

    t.field('profile', {
      type: 'User',
      resolve: (parent, args, ctx): Promise<User | null> => {
        const userId = getUserId(ctx);
        return ctx.prisma.user({ id: userId });
      },
    });
  },
});
