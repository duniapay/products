import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import AuthCredentials, { IAuthCredentials } from 'src/core/credentials';
import { IAuthCredentialsRequestDto } from 'src/core/credentials_request.dto';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
const {request} = require('gaxios');






  

@Injectable()
export class UserService implements IUserDao {
    private readonly users: IUser[] = [];

    constructor(private configService: ConfigService) {
    }
    
    getAll: () => Promise<IUser[]>;
  
  
    
    async getOne(email: string): Promise<IUser> {
        return null;
    }

   
    
    async auth(credentials: IAuthCredentialsRequestDto, issuerDomain: String,): Promise<AuthCredentials> {
       
   
      
          let requestConfig = {
            url:issuerDomain,
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(credentials)
        };
    
    
        
       try {
          const res = await request(requestConfig).then(function (response) {
              var dk = new AuthCredentials(response.data.access_token, response.data.token_type,response.data.expires); 
              return Promise.resolve(response.data)
            }).catch(function (error) {
              throw error;
            });
            return Promise.resolve(res)

       } catch (error) {
           return Promise.reject(error)
       }
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



