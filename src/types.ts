import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";
import { createUpdootLoader } from "./utils/createUpdootLoader";
import { createUserLoader } from "./utils/createUserLoader";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  redisClient: Redis;
  req: Request & { session: Session };
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};
