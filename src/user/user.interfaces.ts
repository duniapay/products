import AuthCredentials, { IAuthCredentials } from "src/core/credentials";
import { IUser } from "./user.entity";


export interface IUserDao {
  getOne: (email: string) => Promise<IUser | null>;
  getAll: () => Promise<IUser[]>;
  auth: (credentials: {client_id: string,client_secret: string },issuerDomain: String,audience: String) => Promise<IAuthCredentials>;
  add: (user: IUser) => Promise<IUser>;
  update: (user: IUser) => Promise<IUser>;
  delete: (id: number) => Promise<boolean>;
}