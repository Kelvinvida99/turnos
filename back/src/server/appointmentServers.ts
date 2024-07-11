import IAppointment from "../interfaces/IAppointment";
import appointmentDto from "../dto/appointmentDto";
// import { users } from "./userServers";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { appointmentEntity } from "../config/data-source";
import { getUserByIdServer } from "./userServers";
import { AppointmentStatus } from "../entities/Appointment";


export const getAllAppointmentsServer = async () => {
  try {
    const appointments = await appointmentEntity.find();
    if (appointments) {
      return appointments;
    } else {
      throw new Error("Hubo un error en getAllAppointmentsServer");
    }
  } catch (error) {
    console.error("Hubo un error en getAllAppointmentsServer", error);
  }
};

export const createAppointmentService = async (appointmentData: appointmentDto):Promise<Appointment|undefined> => {

  const user: User | undefined =  await getUserByIdServer(appointmentData.userId);

  const addAppointment =  {
    date: appointmentData.date,
    time: appointmentData.time,
    status: AppointmentStatus.Active,
    user: user
  };
  const newAppointment = await appointmentEntity.create(addAppointment);
  await appointmentEntity.save(newAppointment);
  return newAppointment;
};

export const getAppointmentByIdServer = async (id: number) => {
  try {
    const getAppointmentById = await appointmentEntity.findOneBy({ id });
    if (getAppointmentById) {
      return getAppointmentById;
    } else {
      throw new Error("Hubo un error en getAllAppointmentsServer");
    }
  } catch (error) {
    console.error("Hubo un error en getAllAppointmentsServer", error);
  }
};


export const updateAppointmentServer = async (id:number) => {
  try {
    const appointiment = await appointmentEntity.findOne({
      where:{id:id}
    });
    if (appointiment){
      appointiment.status = AppointmentStatus.Cancelled;
      appointmentEntity.save(appointiment);
      return appointiment;
    } else {
      throw new Error ("No existe un appointment con ese id");
    }
  } catch (error) {
    console.error('Hubo un error en updateAppointmentServer', error)
  }
};
