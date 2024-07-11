import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";


@Entity({
  name:"users"
})
export class User{
  @PrimaryGeneratedColumn()
    id:number;

  @Column({
    length : 100
  })
    name:string;

  @Column()
    email:string;

  @Column()
    birthdate:string;

  @Column("integer")
    nDni:string;

  @OneToOne(() => Credential)
  @JoinColumn()
    credentials: Credential;

  @OneToMany(() => Appointment,(appointment => appointment.user))
    appointments:Appointment[];
}