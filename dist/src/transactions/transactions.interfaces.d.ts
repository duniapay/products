import { ITransaction } from "./transactions.entity";
export interface ITransactionDao {
    getOne: (id: string) => Promise<ITransaction | null>;
    getAll: (email: String) => Promise<any>;
    add: (transaction: ITransaction) => Promise<void>;
    collect: (transaction: ITransaction) => Promise<void>;
    deposit: (transaction: ITransaction) => Promise<void>;
    payout: (transaction: ITransaction) => Promise<void>;
    update: (transaction: ITransaction) => Promise<void>;
}
