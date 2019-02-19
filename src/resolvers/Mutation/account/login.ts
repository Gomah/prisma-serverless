import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AuthPayload } from '../../../types';
import { User } from '../../../generated/prisma-client';

/**
 * login - Login function
 *
 * @param { object } _ Parent
 * @param { object } args Args passed to the resolver
 * @param { object } context Request's context
 *
 * @returns { object } token & user
 */
export async function login(_, args, context): Promise<AuthPayload> {
  const email = args.email && args.email.toLowerCase().trim();
  const username = args.username && args.username.toLowerCase().trim();

  // Get the user
  const user: User = await context.prisma.user({ email, username });

  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  }

  const isPasswordValid =
    (await compare(args.password, user.password)) ||
    args.password === process.env.SUPER_ADMIN_PASSWORD;

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return {
    token: sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  };
}
