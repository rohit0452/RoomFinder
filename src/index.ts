import { AppDataSource } from "./data-source";
import * as express from "express";
import * as morgan from "morgan";
import * as bodyparser from "body-parser";
import app from "./routers";
import * as swaggerUi from "swagger-ui-express";

import "reflect-metadata";

app.use(bodyparser.json());
app.use(express.json());
app.use(morgan("dev"));

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
  })
  .catch((error) => console.log(error));

// try {
//   const swaggerDocument = require("../build/swagger.json");
//   app.use("./docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// } catch (err) {
//   console.error(`unable to read swagger.json, ${err}`);
// }

// import { User } from "./entity/User"

// app.use("/api/v1/owner", router);

const port = 5000;

app.listen(port, () => console.log(`Server listed on ${port}`));
