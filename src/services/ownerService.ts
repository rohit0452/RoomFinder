import { Owner } from "../entity/Owner";

export type UserCreationParams = Pick<Owner, "email" | "name" | "phoneNo">;
