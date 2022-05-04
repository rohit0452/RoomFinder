import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Owner } from "./Owner";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameOfRoom: string;

  @Column()
  price: number;

  @Column()
  deposit: number;

  @Column()
  duration: number;

  @Column()
  discription: string;

  @Column()
  location: string;

  @Column()
  geneder: string;

  @Column()
  aggrement: number;

  @ManyToOne(() => Owner, (owner) => owner.rooms)
  owner: Owner;
}
