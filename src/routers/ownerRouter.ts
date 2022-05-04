import * as express from "express";
import IBaseResponces from "../interfaces/responces/IBaseResponces";
import { getOwner, addOwner, checkRoom } from "../repository/ownersRepo";

export const OwnerRouter = express.Router();

let ires = new IBaseResponces();

// Get all owners Details
OwnerRouter.get("/", async function (req, res) {
  try {
    const allData = await getOwner(res);
    ires.statusCode = 200;
    ires.status = "Success";
    ires.data = allData;

    return res.send(ires);
  } catch (err) {
    ires.error = err;
    ires.message = err.message;

    return res.send(ires);
  }
});

// Owner Can post Rooms
OwnerRouter.post("/", async (req, res) => {
  try {
    const addOwners = await addOwner(req.body);
    ires.statusCode = 200;
    ires.status = "Success";
    ires.data = addOwners;

    return res.send(ires);
  } catch (err) {
    ires.error = err;
    ires.message = err.message;

    return res.send(ires);
  }
});

//  Through this owner can check his all rooms
OwnerRouter.get("/:id", async (req, res) => {
  try {
    const allRoom = await checkRoom(req.params.id);
    ires.statusCode = 200;
    ires.status = "Success";
    ires.data = allRoom;

    return res.send(ires);
  } catch (err) {
    ires.message = err.message;
    ires.error = err;

    res.send(ires);
  }
});

OwnerRouter.delete("/:id", async (req, res) => {});
// router.route("/").get(Owners).post(addOwner);
