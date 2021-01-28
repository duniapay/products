import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TransactionDTO } from 'src/core/transaction.dto';
import { ThisMonthInstance } from 'twilio/lib/rest/api/v2010/account/usage/record/thisMonth';
import { IExportResponse } from './export.interfaces';
import { IQuery } from './query.interface';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';
const gaxios = require('gaxios');

@Injectable()
export class TransactionsService implements ITransactionDao {
    private _end: string;
    private _customer: string;
    constructor(private configService: ConfigService) { 
        gaxios.instance.defaults = {
            baseURL: this.configService.get<string>('BACKEND_TX_URL') ,
            headers: {
              Authorization:  this.configService.get<string>('BACKEND_API')
              }
          }
        this._end = this.configService.get<string>('BACKEND_TX_URL');
        this._customer =this.configService.get<string>('CUSTOMER_EMAIL') 
    }

    port(): string {
        return this.configService.get<string>('PORT');
    }


    /// Create a transaction export.

    async createExport(query: IQuery): Promise<string> {
     
       try {
        const res = await gaxios.request({url: '/exports/',method: 'GET', data: 
            {
            query: {
                status: 'Complete',
            }
        }
          }).then(function (response) {
              return Promise.resolve(response.data)
            }).catch(function (error) {
                return Promise.reject(error)
            });
            return Promise.resolve(res);
       } catch (error) {
           return Promise.reject(error)
       }
    }

    async export(exportId: String): Promise<IExportResponse[]> {
        try {
            const res = await gaxios.request({url: '/data',method: 'POST', data: JSON.stringify({some: 'data'})  }).then(function (response) {
                  return Promise.resolve(response.data)
                }).catch(function (error) {
                    return Promise.reject(error)
                });
                return Promise.resolve(res);
           } catch (error) {
               return Promise.reject(error)
           }
    }

    async payout(transaction: ITransaction): Promise<void> {
        try {
            const res = await gaxios.request({url:`/debit`,method: 'POST', data: JSON.stringify({user: transaction.customerEmail,amount: transaction.amount, currency: transaction.currency, subtype: 'payout'  }) }).then(function (response) {
                  return Promise.resolve(response.data)
                }).catch(function (error) {
                    return Promise.reject(error)
                });
                return Promise.resolve(res);
           } catch (error) {
               return Promise.reject(error)
           }
    }
    async update(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)

        return null;
    }

    async collect(transaction: ITransaction): Promise<void> {
        try {
            const res = await gaxios.request({url: this._end,method: 'POST', data: JSON.stringify({
                transactions : [
                    {tx_type: "credit",
   user: this._customer,
   amount: transaction.amount,
   subtype: 'merchant_payment',

   currency: "XOF"},
   {tx_type: "debit",
   user: transaction.customerEmail,
   amount: transaction.amount,
   subtype: 'customer_deposit',

   currency: transaction.currency}
                ]
            })  }).then(function (response) {
                  return Promise.resolve(response.data)
                }).catch(function (error) {
                    return Promise.reject(error)
                });
                return Promise.resolve(res);
           } catch (error) {
               return Promise.reject(error)
           }
    }

    async deposit(transaction: ITransaction): Promise<void> {
        try {
            const res = await gaxios.request({url:'/',method: 'POST', data: {
                transactions : [
                    {tx_type: "credit",
                    user: transaction.customerEmail,
                    amount: transaction.amount,
                    currency: transaction.currency,
                    subtype: 'merchant_payment'
                
                },
                    {tx_type: "debit",
                    user: this._customer,
                    amount: transaction.amount,
                    currency: transaction.currency,
                    subtype: 'customer_withdraw	'
                }
  
                ]
            }  }).then(function (response) {
                  return Promise.resolve(response.data)
                }).catch(function (error) {
                    return Promise.reject(error)
                });
                return Promise.resolve(res);
           } catch (error) {
               return Promise.reject(error)
           }
    }
    async add(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)

        return null;
    }

    async getAll(email: string): Promise<any> {
        console.log(email)

        return null;
    }

    async getOne(id: string): Promise<ITransaction> {
        console.log(id)
        return null;
    }
}
