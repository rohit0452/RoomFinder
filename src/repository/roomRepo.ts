import { AppDataSource } from "../data-source";
import { Room } from "../entity/rooms";

export const addRoom = async (where: object): Promise<Room> => {
  const add = repo().create(where);
  return await repo().save(add);
};

export const checkRoomOnOwner = async (id: any): Promise<Room> => {
  return repo()
    .createQueryBuilder("room")
    .leftJoinAndSelect("room.owner", "owner")
    .where("room.owner = :owner", { owner: id })
    .getOne();
};

export const deleteRoom = async (id: any) => {
  return AppDataSource.getRepository(Room)
    .createQueryBuilder("room")
    .softDelete()
    .where("room.id = :id", { id })
    .execute();
};

export const updatingRoom = async (id: any, where: object) => {
  return repo()
    .createQueryBuilder("room")
    .update("room")
    .set(where)
    .where("room.id =:id", { id })
    .execute();
};

function repo() {
  return AppDataSource.getRepository(Room);
}
