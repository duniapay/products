import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Res, HttpStatus,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SentryInterceptor } from 'src/core/sentry.interceptor';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IUser } from './user.entity';
import { IUserDao } from './user.interfaces';
import { UserService } from './user.service';
import { Response } from 'express';
import AuthCredentials, { IAuthCredentials } from 'src/core/credentials';
import AuthCredentialsRequestDto, { IAuthCredentialsRequestDto } from 'src/core/credentials_request.dto';

@UseInterceptors(SentryInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('auth')
  async auth(@Query('secret') secret: string,@Res() res: Response){

    if (secret !== process.env.CUSTOMER_SECRET) {
       res.status(HttpStatus.BAD_GATEWAY);
    } 
    if(secret === process.env.CUSTOMER_SECRET) {
      const client_secret = process.env.CUSTOMER_OATH_SECRET;
      const client_id = process.env.CUSTOMER_OATH_CREDENTIALS;
      const issuerDomain = process.env.AUTH0_ISSUER_URL;
      const audience = process.env.AUTH0_AUDIENCE;
      const grantType = process.env.OAUTH_GRANT_TYPE;
      const credentials: IAuthCredentialsRequestDto = new AuthCredentialsRequestDto(client_id,client_secret,audience,grantType);
    try {
      const token = await this.userService.auth(credentials, issuerDomain);
       return res.status(HttpStatus.ACCEPTED).json( token );
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY);
    }
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  async get(@Param('userId') userId: string): Promise<any> {
    return this.userService.getOne(userId);
  }

  /******************************************************************************
   *                      POST Add User - "POST /api/user"
   ******************************************************************************/
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  async add(@Body() body: IUser): Promise<void> {
    this.userService.add(body);
  }
}
