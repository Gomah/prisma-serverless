import { rule, shield, allow } from 'graphql-shield';
import { getUserId } from '../utils';
import { User } from '../generated/prisma-client';
import { Ctx } from '../types';

const rules = {
  isGuest: rule()(async (): Promise<boolean> => true),

  isUser: rule()(
    async (parent, args, context: Ctx): Promise<boolean> => {
      const userId = await getUserId(context);
      return !!userId;
    }
  ),

  isAdmin: rule({ cache: 'strict' })(
    async (parent, args, context: Ctx): Promise<boolean> => {
      const userId = await getUserId(context);
      const user: User = await context.prisma.user({ id: userId });
      return user.role === 'ADMIN';
    }
  ),
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
