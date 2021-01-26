import Transaction, { ITransaction } from "./transactions.entity";
import { ITransactionDao } from "./transactions.interfaces";

export class TransactionsServiceMock implements ITransactionDao {

   async createExport(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }
  
  async export(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }

  async payout(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }
  
  async update(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }

  async collect(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }

  async deposit(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }

  async add(transaction: Transaction): Promise<void> {
    if(transaction !== undefined) {
      return Promise.resolve();
     } else {
      return Promise.reject();
     }
  }

  async getAll(email: string): Promise<any> {
    if(email !== undefined && email !== '') {
      return Promise.resolve({});
     } else {
      return Promise.reject();
     }
  }
  async getOne(id: string): Promise<Transaction> {
    let transaction = new Transaction(1,5000,'test@demo.com','550534', 'XOF','serge wilfried','+8733546822');

    if(transaction !== undefined && transaction.id !== undefined) {
      return Promise.resolve(transaction);
     } else {
      return Promise.reject();
     }
  }
}
