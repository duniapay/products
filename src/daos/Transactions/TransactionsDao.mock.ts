import { ITransaction } from '@entities/Transactions';
import { getRandomInt } from '@shared/functions';

import { ITransactionDao } from './TransactionsDao';
import MockDaoMock from '../MockDb/MockDao.mock';

class TransactionDao extends MockDaoMock implements ITransactionDao {
  public async getOne(id: string): Promise<ITransaction | null> {
    const db = await super.openDb();
    for (const transaction of db.transactions) {
      if (transaction.customerEmail === id) {
        return transaction;
      }
    }
    return null;
  }

  public async getAll(): Promise<ITransaction[]> {
    const db = await super.openDb();
    return db.transactions;
  }

  public async add(transaction: ITransaction): Promise<void> {
    const db = await super.openDb();
    transaction.id = getRandomInt();
    db.transactions.push(transaction);
    await super.saveDb(db);
  }

  public async payout(transaction: ITransaction): Promise<void> {
    const db = await super.openDb();
    transaction.id = getRandomInt();
    db.transactions.push(transaction);
    await super.saveDb(db);
  }

  public async deposit(transaction: ITransaction): Promise<void> {
    const db = await super.openDb();
    transaction.id = getRandomInt();
    db.transactions.push(transaction);
    await super.saveDb(db);
  }

  public async collect(transaction: ITransaction): Promise<void> {
    const db = await super.openDb();
    transaction.id = getRandomInt();
    db.transactions.push(transaction);
    await super.saveDb(db);
  }

  public async update(transaction: ITransaction): Promise<void> {
    const db = await super.openDb();
    for (let i = 0; i < db.transactions.length; i++) {
      if (db.transactions[i].id === transaction.id) {
        db.transactions[i] = transaction;
        await super.saveDb(db);
        return;
      }
    }
    throw new Error('User not found');
  }

  public async delete(id: number): Promise<void> {
    const db = await super.openDb();
    for (let i = 0; i < db.users.length; i++) {
      if (db.users[i].id === id) {
        db.users.splice(i, 1);
        await super.saveDb(db);
        return;
      }
    }
    throw new Error('User not found');
  }
}

export default TransactionDao;
