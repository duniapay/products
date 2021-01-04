import jsonfile from 'jsonfile';
import { IUser } from '@entities/User';
import { ITransaction } from '@entities/Transactions';

interface IDatabase {
  users: IUser[];
  transactions: ITransaction[];
}

class MockDaoMock {
  private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';

  protected openDb(): Promise<IDatabase> {
    return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
  }

  protected saveDb(db: IDatabase): Promise<void> {
    return jsonfile.writeFile(this.dbFilePath, db);
  }
}

export default MockDaoMock;
