import { prisma } from '../../src/generated/prisma-client';

(async (): Promise<void> => {
  await prisma.createUser({
    email: 'user@gomah.fr',
    role: 'USER',
    password: '$2a$10$qqUAJ82T5hVQnlgObv444OoUW.vhEtlsS0rU1I3IHBSfg8cl63fru',
  });

  await prisma.createUser({
    email: 'admin@gomah.fr',
    role: 'ADMIN',
    password: '$2a$10$qqUAJ82T5hVQnlgObv444OoUW.vhEtlsS0rU1I3IHBSfg8cl63fru',
  });
})();
