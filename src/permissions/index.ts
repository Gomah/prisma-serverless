import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';

const rules = {
  isGuest: rule()(async () => true),

  isUser: rule()(async (parent, args, context) => {
    const userId = await getUserId(context);
    return !!userId;
  }),
};

export const permissions = shield({
  Query: {
    // Global
    profile: rules.isUser,
  },
  Mutation: {
    // Account
    updateProfile: rules.isUser,
  },
});
