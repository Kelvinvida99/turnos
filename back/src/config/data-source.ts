import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment"
import { Credential } from "../entities/Credential"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "nueva_contrasena",
    database: "proyect_m3_db",
    //dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

export const userEntity = AppDataSource.getRepository(User);
export const credentialEntity = AppDataSource.getRepository(Credential);
export const appointmentEntity = AppDataSource.getRepository(Appointment);