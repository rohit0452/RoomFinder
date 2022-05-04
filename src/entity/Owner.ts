import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Room } from "./rooms";
@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column()
  email: string;

  @Column({ type: "varchar" })
  phoneNo: number;

  @OneToMany(() => Room, (rooms) => rooms.owner)
  @JoinColumn()
  rooms: Room[];
}
