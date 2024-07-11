import { Router } from "express";
const userRouter: Router = Router();
import {
    createUserController,
    getUserController,
    getUserByIdController,
    userLogin
  } from "../controllers/userController";

userRouter.get("/", getUserController);
userRouter.get("/:id", getUserByIdController)
userRouter.post("/register", createUserController);
userRouter.post("/login", userLogin);

export default userRouter;