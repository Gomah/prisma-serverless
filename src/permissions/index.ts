import { rule, shield, allow } from 'graphql-shield';
import { getUserId } from '../utils';
import { User } from '../generated/prisma-client';

const rules = {
  isGuest: rule()(async () => true),

  isUser: rule()(async (parent, args, context) => {
    const userId = await getUserId(context);
    return !!userId;
  }),

  isAdmin: rule({ cache: 'strict' })(async (parent, args, context, info) => {
    const userId = await getUserId(context);
    const user: User = await context.prisma.user({ id: userId });
    return user.role === 'ADMIN';
  }),
};

export const permissions = shield({
  Query: {
    // Global
    '*': rules.isAdmin,
    profile: rules.isUser,
  },
  Mutation: {
    '*': rules.isAdmin,
    login: allow,
    signup: allow,
  },
});
