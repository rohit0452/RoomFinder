import "reflect-metadata";
import { DataSource } from "typeorm";
import { Owner } from "./entity/Owner";
import { Room } from "./entity/rooms";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "bigbang@1330",
  database: "tourData",
  synchronize: false,
  logging: false,
  entities: [Owner, Room],
  migrations: [],
  subscribers: [],
});
