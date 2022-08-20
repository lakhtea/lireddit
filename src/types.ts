import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  redisClient: Redis;
  req: Request & { session: Session };
  res: Response;
};
