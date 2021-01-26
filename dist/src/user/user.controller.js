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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const sentry_interceptor_1 = require("../core/sentry.interceptor");
const transactions_entity_1 = require("../transactions/transactions.entity");
const user_service_1 = require("./user.service");
const credentials_1 = require("../core/credentials");
const credentials_request_dto_1 = require("../core/credentials_request.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async auth(secret, res) {
        if (secret !== process.env.CUSTOMER_SECRET) {
            res.status(common_1.HttpStatus.BAD_GATEWAY);
        }
        if (secret === process.env.CUSTOMER_SECRET) {
            const client_secret = process.env.CUSTOMER_OATH_SECRET;
            const client_id = process.env.CUSTOMER_OATH_CREDENTIALS;
            const issuerDomain = process.env.AUTH0_ISSUER_URL;
            const audience = process.env.AUTH0_AUDIENCE;
            const grantType = process.env.OAUTH_GRANT_TYPE;
            const credentials = new credentials_request_dto_1.default(client_id, client_secret, audience, grantType);
            try {
                const token = await this.userService.auth(credentials, issuerDomain);
                return res.status(common_1.HttpStatus.ACCEPTED).json(token);
            }
            catch (error) {
                return res.status(common_1.HttpStatus.BAD_GATEWAY);
            }
        }
    }
    async get(userId) {
        return this.userService.getOne(userId);
    }
    async add(body) {
        this.userService.add(body);
    }
};
__decorate([
    common_1.Post('auth'),
    __param(0, common_1.Query('secret')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "auth", null);
__decorate([
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "add", null);
UserController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map