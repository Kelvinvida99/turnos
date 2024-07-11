import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"


export enum AppointmentStatus {
  Active = "active",
  Cancelled = "cancelled"
}

@Entity({
  name:"appointments"
})
export class Appointment{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  date:Date;
  
  @Column()
  time:string;
  
  @Column({
    type: "enum",
    enum: AppointmentStatus,
    default: AppointmentStatus.Active
  })
  status: AppointmentStatus;
  
  @ManyToOne(() => User)
  @JoinColumn()
  user:User
}