import { ITransaction } from 'src/transactions/transactions.entity';
import { TransactionsService } from './transactions.service';
import { Response } from 'express';
import { IQuery } from './query.interface';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getOne(id: string, res: Response): Promise<ITransaction>;
    getAll(client: string, res: Response): Promise<any>;
    collect(body: ITransaction, res: Response): Promise<void>;
    payout(body: ITransaction, res: Response): Promise<void>;
    update(body: ITransaction, res: Response): Promise<void>;
    createExport(body: IQuery, res: Response): Promise<void>;
    export(exportId: string, res: Response): Promise<void>;
    deposit(body: ITransaction, res: Response): Promise<void>;
}
