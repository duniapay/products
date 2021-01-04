"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(tx, amount, customerEmail, customerAccountNumber, currency, customerFirstname, customerLastname, partnerName, tx_type, subtype, reference) {
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
        }
        else {
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
exports.default = Transaction;
