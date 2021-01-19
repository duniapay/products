import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { request } from 'gaxios';
import { AuthorizeMfaDto } from './core/AuthorizeMfaDto';
import { INTOUCH_SERVICE, TransactionDTO } from './core/transaction.dto';
import { VerifyMfaDto } from './core/VerifyMfaDto';
var twilio = require('twilio');



@Injectable()
export class AppService {
 
  private client: any;
  constructor(private configService: ConfigService) {
    this.client = new twilio(process.env.TWILLIO_ACCOUNT_SID, process.env.TWILLIO_TOKEN);
  }

  port(): string {
    return this.configService.get<string>('PORT');
  }

}
