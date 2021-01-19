export interface ITransaction {
    id: number;
    customerEmail: string;
    customerAccountNumber: string;
    currency: string;
    customerFirstname: string;
    customerLastname: string;
    partnerName: string;
    tx_type: string;
    subtype: string;
    status: string;
    reference: string;
    amount: number;
    created: number;
}
declare class Transaction implements ITransaction {
    id: number;
    customerEmail: string;
    customerAccountNumber: string;
    currency: string;
    customerFirstname: string;
    customerLastname: string;
    partnerName: string;
    tx_type: string;
    subtype: string;
    status: string;
    reference: string;
    amount: number;
    created: number;
    constructor(tx: number | ITransaction, amount: number, customerEmail?: string, customerAccountNumber?: string, currency?: string, customerFirstname?: string, customerLastname?: string, partnerName?: string, tx_type?: string, subtype?: string, reference?: string);
}
export default Transaction;
