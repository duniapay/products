import { ConfigService } from '@nestjs/config';
import { IExportResponse } from './export.interfaces';
import { IQuery } from './query.interface';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';
export declare class TransactionsService implements ITransactionDao {
    private configService;
    private _end;
    private _customer;
    constructor(configService: ConfigService);
    port(): string;
    createExport(query: IQuery): Promise<string>;
    export(exportId: String): Promise<IExportResponse[]>;
    payout(transaction: ITransaction): Promise<void>;
    update(transaction: ITransaction): Promise<void>;
    collect(transaction: ITransaction): Promise<void>;
    deposit(transaction: ITransaction): Promise<void>;
    add(transaction: ITransaction): Promise<void>;
    getAll(email: string): Promise<any>;
    getOne(id: string): Promise<ITransaction>;
}
