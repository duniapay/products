import { IUser } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    auth(secret: string): Promise<any>;
    get(userId: string): Promise<any>;
    add(body: IUser): Promise<void>;
}
