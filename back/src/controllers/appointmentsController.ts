import { Request, Response } from "express";
import {
  getAllAppointmentsServer,
  createAppointmentService,
  getAppointmentByIdServer,
  updateAppointmentServer,
} from "../server/appointmentServers";

export const getAllAppointmentsController = async (
  req: Request,
  res: Response
) => {
  const appointments = await getAllAppointmentsServer();
  res.status(200).json({
    message: "Citas",
    data: appointments,
  });
};

export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);
  const appointmentById = await getAppointmentByIdServer(id);
  res.status(200).json(appointmentById);
};

export const createAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const newAppointments = await createAppointmentService(req.body);
    res.status(200).json({
      message: "Nueva cita creada",
      data: newAppointments,
    });
  } catch (err) {
    console.error("Hubo un error en newAppointmentController: ", err);
  }
};

export const updateAppointmentController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id
  const updatedAppointment = await updateAppointmentServer(Number(id));
  res.status(200).json(updatedAppointment);
};
