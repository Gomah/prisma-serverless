import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AuthPayload, Ctx } from '../../../types';
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
export async function login(
  _,
  { email: nonParsedEmail, password: nonHashedPassword }: { email: string; password: string },
  context: Ctx
): Promise<AuthPayload> {
  const email = nonParsedEmail && nonParsedEmail.toLowerCase().trim();

  // Get the user
  const user: User = await context.prisma.user({ email });

  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  }

  const isPasswordValid = await compare(nonHashedPassword, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return {
    token: sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  };
}
