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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const credentials_1 = require("../core/credentials");
const credentials_request_dto_1 = require("../core/credentials_request.dto");
const transactions_entity_1 = require("../transactions/transactions.entity");
const { request } = require('gaxios');
const gaxios = require('gaxios');
let UserService = class UserService {
    constructor(configService) {
        this.configService = configService;
        this.users = [];
        gaxios.instance.defaults = {
            baseURL: this.configService.get('BACKEND_USER_URL'),
            headers: {
                Authorization: JSON.stringify('Token ' + this.configService.get('BACKEND_API'))
            }
        };
    }
    async getOne(email) {
        return null;
    }
    async auth(credentials, issuerDomain) {
        let requestConfig = {
            url: issuerDomain,
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(credentials)
        };
        try {
            const res = await request(requestConfig).then(function (response) {
                var dk = new credentials_1.default(response.data.access_token, response.data.token_type, response.data.expires);
                return Promise.resolve(response.data);
            }).catch(function (error) {
                throw error;
            });
            return Promise.resolve(res);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async add(user) {
        return null;
    }
    async update(user) {
        return null;
    }
    async delete(id) {
        return null;
    }
    port() {
        return this.configService.get('PORT');
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map