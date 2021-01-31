import { ConfigService } from '@nestjs/config';
import { IAuthCredentials } from 'src/core/credentials';
import { IAuthCredentialsRequestDto } from 'src/core/credentials_request.dto';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
export declare class UserService implements IUserDao {
    private configService;
    private readonly users;
    constructor(configService: ConfigService);
    getAll: () => Promise<IUser[]>;
    getOne(email: string): Promise<IUser>;
    auth(credentials: IAuthCredentialsRequestDto, issuerDomain: String): Promise<IAuthCredentials>;
    add(user: IUser): Promise<IUser>;
    update(user: IUser): Promise<IUser>;
    delete(id: number): Promise<boolean>;
    port(): string;
}
