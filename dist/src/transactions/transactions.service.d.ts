import { IExportResponse } from './export.interfaces';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';
export declare class TransactionsService implements ITransactionDao {
    getOne: (id: string) => Promise<ITransaction>;
    getAll: (email: String) => Promise<any>;
    add: (transaction: ITransaction) => Promise<void>;
    collect: (transaction: ITransaction) => Promise<void>;
    deposit: (transaction: ITransaction) => Promise<void>;
    payout: (transaction: ITransaction) => Promise<void>;
    update: (transaction: ITransaction) => Promise<void>;
    createExport: (query: IExportResponse) => Promise<String>;
    export: (queryId: string) => Promise<IExportResponse>;
}
