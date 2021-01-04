import { ITransaction } from '@entities/Transactions';
const fetch = require('node-fetch');


export interface ITransactionDao {
  getOne: (id: string) => Promise<ITransaction | null>;
  getAll: (email: String) => Promise<any>;
  add: (transaction: ITransaction) => Promise<void>;
  collect: (transaction: ITransaction) => Promise<void>;
  deposit: (transaction: ITransaction) => Promise<void>;
  payout: (transaction: ITransaction) => Promise<void>;
  update: (transaction: ITransaction) => Promise<void>;
}



class TransactionDao implements ITransactionDao {

  /**
   * @param email
   */
  public getOne(id: string): Promise<ITransaction | null> {
      // Obtain a document reference.
    var _payload:any;
    try {
     
    } catch (error) {
      _payload = error;
      return Promise.reject(_payload);
    }
    return Promise.resolve(_payload);
  }
 
  /**
   *
   */
  public async getAll(email: String): Promise<any> {
    var _payload:any;    
    try {
      var q =email;

      // Fect data from rehive 
      var page = 0; 
      var res:any = await loadTransactions(q,page)
      //var { status,data } = res; 
      var all:any = [res]
      var blob = {
        'status' : res['status'],
        'count': res['count'],
        'next': res['data']['next'].replace(process.env.BACKEND_URL, 'https://api.duniapay.net/3/admin/'),
        'previous': res['data']['previous'],
        'results': res['data']['results']
      }
      return Promise.resolve(blob);
    } catch (error) {
      _payload = error;
      return Promise.reject(_payload);
    }
  }

  /**
   *
   * @param transaction
   */
  public async add(transaction: ITransaction): Promise<void> {
    // TODO
    return Promise.resolve(undefined);
  }

  /**
   *
   * @param transaction
   */
  public async collect(transaction: ITransaction): Promise<void> {
    var _payload:any;

    var c = {"transactions": [
      {"tx_type": "debit",
    "user": transaction.customerEmail,
    "amount": transaction.amount,
    "currency": transaction.currency,
    "subtype": "merchant_payment",
    "status": "Pending"
    },
    {
    "tx_type": "credit",
    "user": process.env.CUSTOMER_EMAIL,
    "amount": transaction.amount,
    "subtype": "customer_payment",
    "currency": transaction.currency,
    }]}

    var parsedString = JSON.stringify(c); 
console.log(parsedString)
    try {
      
      await fetch(process.env.BACKEND_TX_URL,{ method: 'POST',headers:{
        "Authorization": process.env.BACKEND_API
    }, body: parsedString.toString() })
      .then(async (json: any) => {
        _payload = json;
        
      });
    } catch (error) {
      _payload = error;
    }
    return Promise.resolve(_payload);
  }

  /**
   *
   * @param transaction
   */
  public async deposit(transaction: ITransaction): Promise<void> {
    var _payload:any;
    var c = {"transactions": [
      {"tx_type": "debit",
    "user": process.env.CUSTOMER_EMAIL,
    "amount": transaction.amount,
    "currency": transaction.currency,
    "subtype": "customer_withdraw"
    },
    {
    "tx_type": "credit",
    "user": transaction.customerEmail,
    "amount": transaction.amount,
    "subtype": "merchant_payment",
    "status" : 'Pending',
    "currency": transaction.currency,
    }]}
    var parsedString = JSON.stringify(c); 
    console.log(parsedString)

    try {
      await fetch(process.env.BACKEND_TX_URL,{ method: 'POST',headers:{
        "Authorization": process.env.BACKEND_API
    }, body: parsedString})
      .then((json: any) => {
        _payload = json;
      });

    } catch (error) {
      _payload = error;
    }
    return Promise.resolve(_payload);
  }
           
    /**
   *
   * @param transaction
   */
  public async payout(transaction: ITransaction): Promise<void> {
    var _payload:any;

    var c: any = {
    "user": process.env.CUSTOMER_EMAIL,
    "amount": transaction.amount,
    "currency": transaction.currency,
    "status": "Pending"
  };
    var parsedString = JSON.stringify(c); 
    console.log(parsedString.toString())

    try {
      await fetch(process.env.BACKEND_TX_URL+`/debit`,{ method: 'POST',headers:{
        "Authorization": process.env.BACKEND_API
    }, body: parsedString })
      .then((json: any) => {
        _payload = json;
        console.log(json)
      });

    } catch (error) {
      _payload = error;
      return Promise.reject(error);
    }
    return Promise.resolve(_payload);
  }


  /**
   *
   * @param transaction
   */
  public async update(transaction: ITransaction): Promise<void> {
    var _payload:any;

    try {

    } catch (error) {
      _payload = error;
    }
    return Promise.resolve(_payload);
  }

}
function loadTransactions(user: any,page: number){
  return new Promise(function(resolve, reject){
    var url = process.env.BACKEND_TX_URL;
    if(page===0) {
      url = url + '?user=' + user;
    } else {
      url = url + '?page=' + page + '&user='+ user;
    }

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
  })}




export default TransactionDao;
