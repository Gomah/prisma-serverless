import { stringArg, idArg, mutationType } from 'nexus';

// Account
import { login } from './account/login';
import { signup } from './account/signup';
import { updateProfile } from './account/update-profile';

export const Mutation = mutationType({
  definition(t) {
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

    t.field('updateProfile', {
      type: 'User',

      args: {
        id: idArg(),
        firstName: stringArg({ nullable: true }),
        lastName: stringArg({ nullable: true }),
        phone: stringArg({ nullable: true }),
        email: stringArg({ nullable: true }),
        password: stringArg({ nullable: true }),
      },
      resolve: updateProfile,
    });
  },
});
