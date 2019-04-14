import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { Prisma, User } from './generated/prisma-client';

export interface Ctx {
  prisma: Prisma;
  event: APIGatewayProxyEvent;
  context: Context;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface TriggerPasswordResetPayload {
  ok: boolean;
}
