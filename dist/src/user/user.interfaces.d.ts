import { IUser } from "./user.entity";
export interface IUserDao {
    getOne: (email: string) => Promise<IUser | null>;
    getAll: () => Promise<IUser[]>;
    auth: (credentials: {
        client_id: string;
        client_secret: string;
    }) => Promise<{}>;
    add: (user: IUser) => Promise<void>;
    update: (user: IUser) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
