import { Router } from "express";
const appointmentsRouter = Router();
import {
  getAllAppointmentsController,
  getAppointmentByIdController,
  createAppointmentController,
  updateAppointmentController
} from "../controllers/appointmentsController";

appointmentsRouter.post("/schedule", createAppointmentController);
appointmentsRouter.get("/", getAllAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.put("/cancel/:id", updateAppointmentController);

export default appointmentsRouter;
