"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsServiceMock = void 0;
const transactions_entity_1 = require("./transactions.entity");
class TransactionsServiceMock {
    async createExport(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async export(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async payout(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async update(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async collect(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async deposit(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async add(transaction) {
        if (transaction !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async getAll(email) {
        if (email !== undefined && email !== '') {
            return Promise.resolve({});
        }
        else {
            return Promise.reject();
        }
    }
    async getOne(id) {
        let transaction = new transactions_entity_1.default(1, 5000, 'test@demo.com', '550534', 'XOF', 'serge wilfried', '+8733546822');
        if (transaction !== undefined && transaction.id !== undefined) {
            return Promise.resolve(transaction);
        }
        else {
            return Promise.reject();
        }
    }
}
exports.TransactionsServiceMock = TransactionsServiceMock;
//# sourceMappingURL=transactions.service.mock.js.map