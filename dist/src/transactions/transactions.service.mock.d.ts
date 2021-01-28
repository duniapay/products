import { IExportResponse } from "./export.interfaces";
import { IQuery } from "./query.interface";
import Transaction from "./transactions.entity";
import { ITransactionDao } from "./transactions.interfaces";
export declare class TransactionsServiceMock implements ITransactionDao {
    createExport(query: IQuery): Promise<string>;
    export(id: string): Promise<IExportResponse[]>;
    payout(transaction: Transaction): Promise<void>;
    update(transaction: Transaction): Promise<void>;
    collect(transaction: Transaction): Promise<void>;
    deposit(transaction: Transaction): Promise<void>;
    add(transaction: Transaction): Promise<void>;
    getAll(email: string): Promise<any>;
    getOne(id: string): Promise<Transaction>;
}
