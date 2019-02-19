import { User } from '../../../generated/prisma-client';
import { getUserId } from '../../../utils';

/**
 * updateProfile
 *
 * @param { object } _ Parent
 * @param { object } args Args passed to the resolver
 * @param { object } context Request's context
 *
 * @returns { User } User
 *
 */
export async function updateProfile(
  _,
  { firstName, lastName, email, phone },
  context
): Promise<User> {
  const userId = await getUserId(context);

  // Check email existence
  if (email) {
    const [emailExists, isUserEmail]: [boolean, boolean] = await Promise.all([
      context.prisma.$exists.user({
        email: email.toLowerCase().trim(),
      }),

      context.prisma.$exists.user({
        email: email.toLowerCase().trim(),
        id: userId,
      }),
    ]);

    if (emailExists && !isUserEmail) {
      throw new Error('Email already exists');
    }
  }

  const updatedData = {
    where: { id: userId },
    data: { firstName, lastName, email: email && email.toLowerCase().trim(), phone },
  };

  return context.prisma.updateUser(updatedData);
}
