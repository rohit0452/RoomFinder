import * as express from "express";
import IBaseResponces from "../interfaces/responces/IBaseResponces";
import {
  addRoom,
  checkRoomOnOwner,
  deleteRoom,
  updatingRoom,
} from "../repository/roomRepo";

export const roomRouter = express.Router();
let ires = new IBaseResponces();

// Post a Room
roomRouter.post("/", async function (req, res) {
  try {
    const CreateRoom = await addRoom(req.body);
    ires.statusCode = 201;
    ires.status = "Success";
    ires.data = CreateRoom;

    return res.send(ires);
  } catch (err) {
    ires.error = err;
    ires.message = err.message;

    return res.send(ires);
  }
});

//  Just for the know about the Using of Joins
roomRouter.get("/", async (req, res) => {
  const checkRoom = await checkRoomOnOwner(req.body);
  ires.statusCode = 200;
  ires.status = "Success";
  ires.data = checkRoom;
  if (!checkRoom) {
    ires.message = "id not found";

    return res.send(ires);
  }

  return res.send(ires);
});

// Deleting Room
roomRouter.delete("/:id", async (req, res) => {
  try {
    const removeRoom = await deleteRoom(req.params.id);
    ires.statusCode = 200;
    ires.status = "Success";
    ires.data = removeRoom;

    return res.send(ires);
  } catch (err) {
    ires.message = err.message;
    ires.error = err;
    return res.send(ires);
  }
});

// For Updating Rooms
roomRouter.patch("/:id", async (req, res) => {
  try {
    const updateRoom = await updatingRoom(req.params.id, req.body);
    ires.statusCode = 200;
    ires.status = "Success";
    ires.data = updateRoom;

    return res.send(updateRoom);
  } catch (err) {
    ires.error = err;
    ires.message = err.message;
    return res.send(ires);
  }
});
