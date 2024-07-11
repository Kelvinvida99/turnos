import { credentialEntity } from "../config/data-source";
import CredentialsDto from "../dto/credentialDto";
import { Credential } from "../entities/Credential";

const id: number = 11;


export const createCredentialsService = async (credentials:CredentialsDto):Promise<Credential> => {

  await credentialEntity.create(credentials);
  const result = await credentialEntity.save(credentials);
  console.log(result)
  return result;
};

export const confirmUserCredentials = async (loginData:CredentialsDto):Promise<number> => {
  const verifyLoginData = await credentialEntity.findOne({
    where:{username:loginData.username, password:loginData.password}
  });

  if (verifyLoginData) return verifyLoginData.id;
  else throw new Error ("Inicio de sesión fallido, no coinciden Usuario y Contraseña");
};