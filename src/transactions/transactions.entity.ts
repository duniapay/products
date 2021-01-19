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
  
  class Transaction implements ITransaction {
    public id: number;
    public customerEmail: string;
    public customerAccountNumber: string;
    public currency: string;
    public customerFirstname: string;
    public customerLastname: string;
    public partnerName: string;
    public tx_type: string;
    public subtype: string;
    public status: string;
    public reference: string;
    public amount: number;
    public created: number;
  
    constructor(tx: number | ITransaction,  amount: number,customerEmail?: string, customerAccountNumber?: string, currency?: string,customerFirstname?: string, customerLastname?: string, partnerName?: string, tx_type?: string,subtype?: string,reference?: string,) {
      if (typeof tx === 'number') {
        this.id = tx;
        this.customerEmail = customerEmail || '';
        this.customerAccountNumber = customerAccountNumber || '';
        this.currency = currency || 'XOF';
        this.customerFirstname = customerFirstname || '';
        this.customerLastname = customerLastname || '';
        this.partnerName = partnerName || '1XPAY';
        this.tx_type = tx_type || 'credit';
        this.subtype = subtype || 'deposit';
        this.status = status || '';
        this.reference = reference || '';        
        this.amount = amount || 0;
        this.created = Date.now();

      } else {
        this.id = tx.id;
        this.customerEmail = tx.customerEmail;
        this.customerAccountNumber = tx.customerAccountNumber || '';
        this.currency = tx.currency || 'XOF';
        this.customerFirstname = tx.customerFirstname || '';
        this.customerLastname = tx.customerLastname || '';
        this.partnerName = tx.partnerName || '1XPAY';
        this.tx_type = tx.tx_type || 'credit';
        this.subtype = tx.subtype || 'deposit';
        this.status = tx.status || 'Pending';
        this.reference = tx.reference || '';        
        this.amount = amount || 0;
        this.created = Date.now();
      }
    }
  }
  
  export default Transaction;