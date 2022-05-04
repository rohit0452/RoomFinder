import * as express from "express";
import { OwnerRouter } from "./ownerRouter";
import { roomRouter } from "./roomRouter";

const app = express();

app.use(express.json());

app.use("/api/v1/owner", OwnerRouter);
app.use("/api/v1/room", roomRouter);

export default app;
