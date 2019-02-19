import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AuthPayload } from '../../../types';

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
    username: nonParsedUsername,
    phone,
    password: nonHashedPassword,
    email: nonParsedEmail,
  },
  context
): Promise<AuthPayload> {
  const password = await hash(nonHashedPassword, 10);
  const email = nonParsedEmail.toLowerCase().trim();
  const username = nonParsedUsername && nonParsedUsername.toLowerCase().trim();

  const isEmailAlreadyRegistered = await context.prisma.user({ email });

  if (isEmailAlreadyRegistered) {
    throw new Error(`Email already in use.`);
  }

  const data = { firstName, lastName, username, email, phone, password };
  const user = await context.prisma.createUser(data);

  return { token: sign({ userId: user.id }, process.env.APP_SECRET), user };
}
