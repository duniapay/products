"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const transactions_service_1 = require("./transactions/transactions.service");
const transactions_controller_1 = require("./transactions/transactions.controller");
const authz_module_1 = require("./authz/authz.module");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'public'),
                exclude: ['/api*'],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                cache: true,
            }),
            authz_module_1.AuthzModule,
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, transactions_controller_1.TransactionsController],
        providers: [app_service_1.AppService, user_service_1.UserService, transactions_service_1.TransactionsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map