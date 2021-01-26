import { Body, Controller, Get, HttpStatus, Post, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizeMfaDto } from './core/AuthorizeMfaDto';
import { SentryInterceptor } from './core/sentry.interceptor';
import { TransactionDTO } from './core/transaction.dto';
import { VerifyMfaDto } from './core/VerifyMfaDto';
import { Response } from 'express';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  debit(validCollectDTO: TransactionDTO): any {
    throw new Error('Method not implemented.');
  }
  airtime(validAirtimeDTO: TransactionDTO): any {
    throw new Error('Method not implemented.');
  }
  authorize(validAuthorizeMfaDto: AuthorizeMfaDto): any {
    throw new Error('Method not implemented.');
  }
  verifiy(validVerifyMfaDto: VerifyMfaDto): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

 
}
