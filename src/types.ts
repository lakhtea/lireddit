import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  redisClient: Redis;
  req: Request & { session: Session };
  res: Response;
};
