import { ITransaction } from 'src/transactions/transactions.entity';
import { IExportRequest } from './export.interfaces';
import { TransactionsService } from './transactions.service';
import { Response } from 'express';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getOne(id: string): Promise<ITransaction>;
    getAll(client: string): Promise<any>;
    add(body: ITransaction): Promise<void>;
    collect(body: ITransaction): Promise<void>;
    payout(body: ITransaction): Promise<void>;
    update(body: ITransaction): Promise<void>;
    createExport(body: IExportRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    export(exportId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    deposit(body: ITransaction): Promise<void>;
}
