import { AppDataSource } from "../data-source";
import { Owner } from "../entity/Owner";

export const getOwner = async (where: any): Promise<Owner[]> => {
  return await repo().find(where);
};

// Owner can Create Room
export const addOwner = async (where: object): Promise<Owner> => {
  const add = repo().create(where);
  return await repo().save(add);
};

// Owner can check his room
export const checkRoom = async (id: any): Promise<Owner> => {
  return repo()
    .createQueryBuilder("owner")
    .leftJoinAndSelect("owner.rooms", "rooms")
    .where("owner.id = :rooms", { rooms: id })
    .getOne();
};

function repo() {
  return AppDataSource.getRepository(Owner);
}
