import { IUser } from "./user.entity";
import { IUserDao } from "./user.interfaces";
export declare class UserServiceMock implements IUserDao {
    getAll: () => Promise<IUser[]>;
    getOne(email: string): Promise<IUser>;
    auth(credentials: {
        client_id: string;
        client_secret: string;
    }): Promise<{}>;
    add(user: IUser): Promise<void>;
    update(user: IUser): Promise<void>;
    delete(id: number): Promise<void>;
}
