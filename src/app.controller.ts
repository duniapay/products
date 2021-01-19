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
  constructor(private readonly appService: AppService) {}

 
}
