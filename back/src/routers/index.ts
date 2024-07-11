import { Router } from "express";
const router: Router = Router();
import userRouter from "./userRouter";
import appointmentsRouter from "./appointmentsRouter"
// import auth from "../middlewares/auth"

router.use("/users", userRouter);
router.use("/appointments", appointmentsRouter)

export default router;
