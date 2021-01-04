require('dotenv').config()

import { IUser } from '@entities/User';
import { getRandomInt } from '@shared/functions';
const fetch = require('node-fetch');

import { IUserDao } from './UserDao';
import MockDaoMock from '../MockDb/MockDao.mock';

class UserDao extends MockDaoMock implements IUserDao {
  public async getOne(email: string): Promise<IUser | null> {
    const db = await super.openDb();
    for (const user of db.users) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  public async getAll(): Promise<IUser[]> {
    const db = await super.openDb();
    return db.users;
  }

  public async add(user: IUser): Promise<void> {
    const db = await super.openDb();
    user.id = getRandomInt();
    db.users.push(user);
    await super.saveDb(db);
  }

  public async auth(credentials: {client_id: string,client_secret: string }): Promise<{}> {
    const jsonBody = {client_id:credentials.client_id,client_secret:credentials.client_secret,audience:process.env.OAUTH_AUDIENCE,grant_type:process.env.OAUTH_GRANT_TYPE};
    
    let requestConfig = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(jsonBody)};

  let response: any

  await fetch(process.env.OAUTH_ENDPOINT, requestConfig)
        .then((res: { json: () => any; }) => res.json())
        .then((_json: any) => {
          response = _json;
        })
        .catch((err: any) => {
          throw err;            
        });

    return response;
  }

  public async update(user: IUser): Promise<void> {
    const db = await super.openDb();
    for (let i = 0; i < db.users.length; i++) {
      if (db.users[i].id === user.id) {
        db.users[i] = user;
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

export default UserDao;
