import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';






  

@Injectable()
export class UserService implements IUserDao {
    private readonly users: IUser[] = [];

    constructor(private configService: ConfigService) {
    }
    
    getAll: () => Promise<IUser[]>;
  
  
    
    async getOne(email: string): Promise<IUser> {
        return null;
    }

    // async getAll(): Promise<IUser> {
    //     return null;
    // }
    
    async auth(credentials: { client_id: string; client_secret: string; }): Promise<{}> {
        return null;
    }

    async add(user: IUser): Promise<void> {
        return null;
    }

    async update(user: IUser): Promise<void> {
        return null;
    }

    async delete(id: number): Promise<void> {
        return null;
    }

    port(): string {
        return this.configService.get<string>('PORT');
      }
}
