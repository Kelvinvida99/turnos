import userDto from "../dto/userDto";
import { User } from "../entities/User";
import { userEntity } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { createCredentialsService } from "./credentialServer";

export const createUserServer = async (userData: userDto) => {
  const newCredId: Credential = await createCredentialsService({
    username: userData.username,
    password: userData.password,
  });
  const addUser = {
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentials: newCredId,
  };
  const newUser: User = await userEntity.create(addUser);
  await userEntity.save(newUser);
  return newUser;
};

export const getUserServer = async () => {
  const usersDb = await userEntity.find({
    relations: {
      appointments: true,
    },
  });
  return usersDb;
};

export const getUserByIdServer = async (id: number) => {
  try {
    const specificUserServer = await userEntity.findOne({
      where: { id: id },
      relations: { appointments: true },
    });
    if (specificUserServer) {
      return specificUserServer;
    } else {
      throw new Error("Hubo un error en getUserByIdServer");
    }
  } catch (error) {
    console.error("Hubo un error en getUserByIdServer: ", error);
  }
};
