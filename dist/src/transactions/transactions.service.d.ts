import { ConfigService } from '@nestjs/config';
import { IExportResponse, IExportRequest } from './export.interfaces';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';
export declare class TransactionsService implements ITransactionDao {
    private configService;
    private readonly cats;
    constructor(configService: ConfigService);
    port(): string;
    createExport(transaction: IExportRequest): Promise<IExportResponse>;
    export(exportId: string): Promise<IExportResponse>;
    payout(transaction: ITransaction): Promise<void>;
    update(transaction: ITransaction): Promise<void>;
    collect(transaction: ITransaction): Promise<void>;
    deposit(transaction: ITransaction): Promise<void>;
    add(transaction: ITransaction): Promise<void>;
    getAll(email: string): Promise<any>;
    getOne(id: string): Promise<ITransaction>;
}
