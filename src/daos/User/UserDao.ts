require('dotenv').config()
import User, { IUser } from '@entities/User';

require('dotenv').config()

import { getRandomInt } from '@shared/functions';
const fetch = require('node-fetch');

export interface IUserDao {
  getOne: (email: string) => Promise<IUser | null>;
  getAll: () => Promise<IUser[]>;
  auth: (credentials: {client_id: string,client_secret: string }) => Promise<{}>;
  add: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class UserDao implements IUserDao {
  public async getOne(email: string): Promise<IUser | null> {
    try {
      var q = email;

      // Fect data from rehive 
      var res:any = await loadUser(q)
      //var { status,data } = res; 
      var _payload = res['data']['results'][0];
      let _user : User;
      if(email === process.env.CUSTOMER_EMAIL) {
      _user = new User(_payload.email,_payload.first_name, _payload.last_name, _payload.id, _payload.available_balance,_payload.account,_payload.mobile) 
      } else {
        _user = new User(_payload.email,_payload.first_name, _payload.last_name, _payload.id, 0,_payload.account,_payload.mobile) 
      }
      return Promise.resolve(_user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async getAll(): Promise<IUser[]> {
    return Promise.resolve([]);
  }

  public async add(user: IUser): Promise<void> {
   
  }

  public async auth(credentials: {client_id: string | undefined,client_secret: string|undefined }): Promise<{}> {
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
    
    throw new Error('User not found');
  }

  public async delete(id: number): Promise<void> {
  
    throw new Error('User not found');
  }
}
function loadUser(user: any){
  return new Promise(function(resolve, reject){
    var url = `https://api.rehive.com/3/admin/users/`;
    if(user!==undefined) {
      url = url + '?email=' + user;
    
    try {
      // Fect data from rehive 
      fetch(url,{ method: 'GET',headers:{
        "Authorization": process.env.BACKEND_API
    },})
      .then((res: { json: () => any; }) => res.json())
      .then((blob: any) => {
          // Store to firestore
          resolve(blob)
      });
    } catch (error) {
      reject(error);
    }
  }
}
  )}

export default UserDao;
