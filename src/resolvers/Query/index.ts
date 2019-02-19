import { queryType } from 'nexus';
import { getUserId } from '../../utils';

export const Query = queryType({
  definition(t) {
    t.field('profile', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user({ id: userId });
      },
    });
  },
});
