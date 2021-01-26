import AuthCredentials from "src/core/credentials";
import { IUser } from "./user.entity";
export interface IUserDao {
    getOne: (email: string) => Promise<IUser | null>;
    getAll: () => Promise<IUser[]>;
    auth: (credentials: {
        client_id: string;
        client_secret: string;
    }, issuerDomain: String, audience: String) => Promise<AuthCredentials>;
    add: (user: IUser) => Promise<void>;
    update: (user: IUser) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
