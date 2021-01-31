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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const sentry_interceptor_1 = require("../core/sentry.interceptor");
const transactions_entity_1 = require("./transactions.entity");
const transactions_service_1 = require("./transactions.service");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async getOne(id, res) {
        return this.transactionsService.getOne(id);
    }
    async getAll(client, res) {
        return this.transactionsService.getAll(client);
    }
    async collect(body, res) {
        this.transactionsService.collect(body);
    }
    async payout(body, res) {
        try {
            let rest = await this.transactionsService.payout(body);
            res.status(common_1.HttpStatus.OK).send(rest);
        }
        catch (error) {
            console.log(error.response.data);
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async update(body, res) {
        try {
            let rest = await this.transactionsService.update(body);
            res.status(common_1.HttpStatus.OK).send(rest);
        }
        catch (error) {
            console.log(error.response.data);
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async createExport(body, res) {
        try {
            let rest = await this.transactionsService.createExport(body);
            res.status(common_1.HttpStatus.OK).send(rest);
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async export(exportId, res) {
        try {
            let rest = await this.transactionsService.export(exportId);
            res.status(common_1.HttpStatus.OK).send(rest);
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async deposit(body, res) {
        try {
            let rest = await this.transactionsService.deposit(body);
            res.status(common_1.HttpStatus.OK).send(rest);
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(error.response.data);
        }
    }
};
__decorate([
    common_2.Get(':id'),
    __param(0, common_2.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getOne", null);
__decorate([
    common_2.Get(),
    __param(0, common_1.Query('client')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getAll", null);
__decorate([
    common_2.Post('collect'),
    __param(0, common_2.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "collect", null);
__decorate([
    common_2.Post('payout'),
    __param(0, common_2.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "payout", null);
__decorate([
    common_2.Post(),
    __param(0, common_2.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "update", null);
__decorate([
    common_2.Post('/exports'),
    __param(0, common_2.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "createExport", null);
__decorate([
    common_2.Get('exports/:exportId'),
    __param(0, common_2.Param(':exportId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "export", null);
__decorate([
    common_2.Post('deposit'),
    __param(0, common_2.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "deposit", null);
TransactionsController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    common_2.Controller('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map