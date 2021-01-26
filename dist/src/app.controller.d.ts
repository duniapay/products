import { AppService } from './app.service';
import { AuthorizeMfaDto } from './core/AuthorizeMfaDto';
import { TransactionDTO } from './core/transaction.dto';
import { VerifyMfaDto } from './core/VerifyMfaDto';
export declare class AppController {
    private readonly appService;
    debit(validCollectDTO: TransactionDTO): any;
    airtime(validAirtimeDTO: TransactionDTO): any;
    authorize(validAuthorizeMfaDto: AuthorizeMfaDto): any;
    verifiy(validVerifyMfaDto: VerifyMfaDto): any;
    constructor(appService: AppService);
}
