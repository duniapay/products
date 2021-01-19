import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';
import { AuthzModule } from './authz/authz.module';


import configuration from './config/configuration';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    AuthzModule,
  ],
  controllers: [AppController, UserController, TransactionsController ],
  providers: [AppService, UserService, TransactionsService],
})
export class AppModule {}
