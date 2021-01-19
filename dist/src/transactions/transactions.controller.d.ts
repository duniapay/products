import { ITransaction } from 'src/transactions/transactions.entity';
import { IExportResponse } from './export.interfaces';
import { TransactionsService } from './transactions.service';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getOne(id: string): Promise<ITransaction>;
    getAll(email: string): Promise<any>;
    add(body: ITransaction): Promise<void>;
    collect(body: ITransaction): Promise<void>;
    payout(body: ITransaction): Promise<void>;
    update(body: ITransaction): Promise<void>;
    createExport(body: IExportResponse): Promise<void>;
    export(exportId: string): Promise<void>;
    deposit(body: ITransaction): Promise<void>;
}
