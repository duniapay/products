"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const transaction_dto_1 = require("../core/transaction.dto");
const gaxios = require('gaxios');
let TransactionsService = class TransactionsService {
    constructor(configService) {
        this.configService = configService;
        gaxios.instance.defaults = {
            baseURL: this.configService.get('BACKEND_TX_URL'),
            headers: {
                Authorization: this.configService.get('BACKEND_API')
            }
        };
        this._end = this.configService.get('BACKEND_TX_URL');
        this._customer = this.configService.get('CUSTOMER_EMAIL');
    }
    port() {
        return this.configService.get('PORT');
    }
    async createExport(query) {
        try {
            const res = await gaxios.request({ url: '/exports/', method: 'GET', data: {
                    query: {
                        status: 'Complete',
                    }
                }
            }).then(function (response) {
                return Promise.resolve(response.data);
            }).catch(function (error) {
                return Promise.reject(error);
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async export(exportId) {
        try {
            const res = await gaxios.request({ url: '/data', method: 'POST', data: JSON.stringify({ some: 'data' }) }).then(function (response) {
                return Promise.resolve(response.data);
            }).catch(function (error) {
                return Promise.reject(error);
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async payout(transaction) {
        try {
            const res = await gaxios.request({ url: `/debit`, method: 'POST', data: JSON.stringify({ user: transaction.customerEmail, amount: transaction.amount, currency: transaction.currency, subtype: 'payout' }) }).then(function (response) {
                return Promise.resolve(response.data);
            }).catch(function (error) {
                return Promise.reject(error);
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async update(transaction) {
        console.log(transaction.amount);
        return null;
    }
    async collect(transaction) {
        try {
            const res = await gaxios.request({ url: this._end, method: 'POST', data: JSON.stringify({
                    transactions: [
                        { tx_type: "credit",
                            user: this._customer,
                            amount: transaction.amount,
                            subtype: 'merchant_payment',
                            currency: "XOF" },
                        { tx_type: "debit",
                            user: transaction.customerEmail,
                            amount: transaction.amount,
                            subtype: 'customer_deposit',
                            currency: transaction.currency }
                    ]
                }) }).then(function (response) {
                return Promise.resolve(response.data);
            }).catch(function (error) {
                return Promise.reject(error);
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async deposit(transaction) {
        try {
            const res = await gaxios.request({ url: '/', method: 'POST', data: {
                    transactions: [
                        { tx_type: "credit",
                            user: transaction.customerEmail,
                            amount: transaction.amount,
                            currency: transaction.currency,
                            subtype: 'merchant_payment'
                        },
                        { tx_type: "debit",
                            user: this._customer,
                            amount: transaction.amount,
                            currency: transaction.currency,
                            subtype: 'customer_withdraw	'
                        }
                    ]
                } }).then(function (response) {
                return Promise.resolve(response.data);
            }).catch(function (error) {
                return Promise.reject(error);
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async add(transaction) {
        console.log(transaction.amount);
        return null;
    }
    async getAll(email) {
        console.log(email);
        return null;
    }
    async getOne(id) {
        console.log(id);
        return null;
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map