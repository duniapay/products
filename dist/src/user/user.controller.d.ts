import { IUser } from './user.entity';
import { UserService } from './user.service';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    auth(secret: string, res: Response): Promise<Response<any, Record<string, any>>>;
    get(userId: string): Promise<any>;
    add(body: IUser): Promise<void>;
}
