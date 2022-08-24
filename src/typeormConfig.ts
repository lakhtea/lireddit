import path from "path";
import { DataSource } from "typeorm";
import { Post } from "./entities/Post";
import { Updoot } from "./entities/Updoot";
import { User } from "./entities/User";

const config = new DataSource({
  type: "postgres",
  database: "lireddit2",
  username: "postgres",
  password: "postgres",
  logging: false,
  synchronize: true,
  entities: [User, Post, Updoot],
  migrations: [path.join(__dirname, "./migrations/*")],
});

export default config;
