import { objectType } from 'nexus';

export const TriggerPasswordResetPayload = objectType({
  name: 'TriggerPasswordResetPayload',
  definition(t) {
    t.boolean('ok');
  },
});
