import { AppDataSource, credentialEntity } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const userRepo = AppDataSource.getRepository(User).extend({
  findCredentialsUser: async function (id: number): Promise<User> {

    const credential: Credential | null = await credentialEntity.findOneBy({id: id});
    if (!credential) {
      throw new Error("No existen esas credenciales");
    }

    const user: User | null = await this.findOneBy({credentials: credential});
    if (!user) {
      throw new Error("No existen esas credenciales");
    }

    return user;
  },
});