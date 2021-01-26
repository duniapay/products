import { ConfigService } from '@nestjs/config';
import AuthCredentials from 'src/core/credentials';
import { IAuthCredentialsRequestDto } from 'src/core/credentials_request.dto';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
export declare class UserService implements IUserDao {
    private configService;
    private readonly users;
    constructor(configService: ConfigService);
    getAll: () => Promise<IUser[]>;
    getOne(email: string): Promise<IUser>;
    auth(credentials: IAuthCredentialsRequestDto, issuerDomain: String): Promise<AuthCredentials>;
    add(user: IUser): Promise<void>;
    update(user: IUser): Promise<void>;
    delete(id: number): Promise<void>;
    port(): string;
}
