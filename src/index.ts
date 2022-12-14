import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { COOKIE_NAME, __prod__ } from "./constants";
import typeOrmConfig from "./typeormConfig";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import { createUserLoader } from "./utils/createUserLoader";
import { createUpdootLoader } from "./utils/createUpdootLoader";

const main = async () => {
  const dataSource = typeOrmConfig;
  await dataSource.initialize();

  await dataSource.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = new Redis();

  app.use(
    cors({
      origin: ["https://studio.apollographql.com", "http://localhost:3000"],
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "lax", //csrf
        secure: "auto", //cookie only works in https,
      },
      saveUninitialized: false,
      secret: "peepeepoopoo",
      resave: false,
    })
  );
  app.set("trust proxy", !__prod__);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      redisClient,
      req,
      res,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader(),
    }),
    csrfPrevention: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.get("/", (_, res) => {
    res.send("hello");
  });
  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => console.error(err));
