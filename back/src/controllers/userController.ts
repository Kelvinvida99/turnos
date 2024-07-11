import { Request, Response } from "express";
import {
  createUserServer,
  getUserServer,
  getUserByIdServer,
} from "../server/userServers";
import { userRepo } from "../repository/userRepo";
import { confirmUserCredentials } from "../server/credentialServer";
import { User } from "../entities/User";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUserServer(req.body);
    if (newUser) {
      res.status(200).json({
        message: "El usuario ha sido creado correctamente",
        data: newUser,
      });
    } else {
      throw new Error("Hubo un error al crear un usuario");
    }
  } catch (error) {
    console.error("Hubo un error en createUserController: ", error);
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const allUsers = await getUserServer();
    if (Array.isArray(allUsers)) {
      res.status(200).json({
        allUsers,
      });
    } else {
      throw new Error("Hubo un error al conseguir los usuarios");
    }
  } catch (error) {
    console.error("Hubo un error en getUserController: ", error);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const specificUserController = await getUserByIdServer(id);
    if (specificUserController) {
      res.status(200).json({
        message: "Usuario filtrado por id",
        data: specificUserController,
      });
    } else {
      throw new Error("Hubo un error al conseguir los usuarios");
    }
  } catch (error) {
    console.error("Hubo un error en getUserByIdController: ", error);
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const credentialsId = await confirmUserCredentials(req.body);
    res.status(200).json({
      message: 'Acceso permitido',
      user: await userRepo.findCredentialsUser(credentialsId)
    })
  } catch (error) {
    console.error("Hubo un error en userLogin: ", error);
  }
}