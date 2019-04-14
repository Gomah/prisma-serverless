import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AuthPayload, Ctx } from '../../../types';

/**
 * signup - Signup function
 *
 * @param { object } _ Parent
 * @param { object } args Args passed to the resolver
 * @param { object } context Request's context
 *
 * @returns { AuthPayload } { token, User }
 */
export async function signup(
  _,
  {
    firstName,
    lastName,
    phone,
    password: nonHashedPassword,
    email: nonParsedEmail,
  }: { firstName?: string; lastName?: string; phone?: string; password: string; email: string },
  context: Ctx
): Promise<AuthPayload> {
  const password = await hash(nonHashedPassword, 10);
  const email = nonParsedEmail.toLowerCase().trim();

  const isEmailAlreadyRegistered = await context.prisma.user({ email });

  if (isEmailAlreadyRegistered) {
    throw new Error(`Email already in use.`);
  }

  const data = { firstName, lastName, email, phone, password };
  const user = await context.prisma.createUser(data);

  return { token: sign({ userId: user.id }, process.env.APP_SECRET), user };
}
