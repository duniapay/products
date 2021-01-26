import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SentryInterceptor } from 'src/core/sentry.interceptor';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
import { UserService } from './user.service';

@UseInterceptors(SentryInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('auth/:secret')
  async auth(@Param(':secret') secret: string): Promise<any> {
    if (secret !== process.env.CUSTOMER_SECRET) {
      // res.status(404).send({
      //     status: 'Unauthorized',
      //     message: "Missing or invalid API Key. Contact Support !"
      // })
    } else {
      const client_secret = process.env.OAUTH_CLIENTSECRET;
      const client_id = process.env.OAUTH_CLIENTID;

      const token = await this.userService.auth({
        client_id: client_id,
        client_secret: client_secret,
      });
      //return res.status(OK).json( token );
    }
    return this.userService.getOne(secret);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  async get(@Param('userId') userId: string): Promise<any> {
    return this.userService.getOne(userId);
  }

  /******************************************************************************
   *                      POST Add User - "POST /api/user"
   ******************************************************************************/
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async add(@Body() body: IUser): Promise<void> {
    this.userService.add(body);
  }
}
