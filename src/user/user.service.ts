import { Injectable } from '@nestjs/common';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';






  

@Injectable()
export class UserService implements IUserDao {
    getOne: (email: string) => Promise<IUser>;
    getAll: () => Promise<IUser[]>;
    auth: (credentials: { client_id: string; client_secret: string; }) => Promise<{}>;
    add: (user: IUser) => Promise<void>;
    update: (user: IUser) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
