import Transaction from "./transactions.entity";
export interface ITransactionDao {
    getOne: (id: string) => Promise<Transaction | null>;
    getAll: (email: String) => Promise<any>;
    add: (transaction: Transaction) => Promise<void>;
    collect: (transaction: Transaction) => Promise<void>;
    deposit: (transaction: Transaction) => Promise<void>;
    payout: (transaction: Transaction) => Promise<void>;
    update: (transaction: Transaction) => Promise<void>;
}
