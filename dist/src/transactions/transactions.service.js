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
const gaxios_1 = require("gaxios");
let TransactionsService = class TransactionsService {
    constructor(configService) {
        this.configService = configService;
        this.cats = [];
    }
    port() {
        return this.configService.get('PORT');
    }
    async createExport(transaction) {
        const { data } = await gaxios_1.request({
            url: process.env.REHIVE_URL + '/3/admin/exports',
            headers: {
                Authorization: `Token ${process.env.REHIVE_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data: transaction,
            method: 'POST'
        });
        return data;
    }
    async export(exportId) {
        const { data } = await gaxios_1.request({
            url: process.env.REHIVE_URL + '/3/admin/exports/' + exportId,
            headers: {
                Authorization: `Token ${process.env.REHIVE_TOKEN}`,
                'Content-Type': 'application/json'
            },
        });
        return data;
    }
    async payout(transaction) {
        console.log(transaction.amount);
        return null;
    }
    async update(transaction) {
        console.log(transaction.amount);
        return null;
    }
    async collect(transaction) {
        console.log(transaction.amount);
        return null;
    }
    async deposit(transaction) {
        console.log(transaction.amount);
        return null;
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