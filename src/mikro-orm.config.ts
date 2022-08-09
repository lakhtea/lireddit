import { Options } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import path from "path";

const config: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true,
};
export default config;
