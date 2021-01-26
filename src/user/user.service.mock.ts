import AuthCredentials, { IAuthCredentials } from "src/core/credentials";
import User, { IUser } from "./user.entity";
import { IUserDao } from "./user.interfaces";


export class UserServiceMock implements IUserDao {
    getAll: () => Promise<IUser[]>;
    
    async getOne(email: string): Promise<IUser> {
       let user = new User('test@demo.com','serge wilfried', 'ouedraogo',1,5000,550534,'+8733546822',{});
       if(email !== undefined && email !== '') {
        return Promise.resolve(user);
       } else {
        return Promise.reject({'message': 'invalid params'});
       }
    }


    
    async auth(credentials: { client_id: string; client_secret: string; }): Promise<IAuthCredentials> {
        if(credentials.client_id !== undefined && credentials.client_secret !== '') {
            let _cred = new AuthCredentials('');
            return Promise.resolve(_cred);
           } else {
            return Promise.reject({'message': 'invalid params'});
           }
    }

    async add(user: IUser): Promise<void> {
        if(user !== undefined) {
            return Promise.resolve();
           } else {
            return Promise.reject();
           }
    }

    async update(user: IUser): Promise<void> {
        if(user !== undefined) {
            return Promise.resolve();
           } else {
            return Promise.reject();
           }
    }

    async delete(id: number): Promise<void> {
        if(id !== undefined) {
            return Promise.resolve();
           } else {
            return Promise.reject();
           }
    }
}