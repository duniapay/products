import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
export declare class UserService implements IUserDao {
    getOne: (email: string) => Promise<IUser>;
    getAll: () => Promise<IUser[]>;
    auth: (credentials: {
        client_id: string;
        client_secret: string;
    }) => Promise<{}>;
    add: (user: IUser) => Promise<void>;
    update: (user: IUser) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
