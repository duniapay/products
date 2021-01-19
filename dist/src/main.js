"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_service_1 = require("@nestjs/config/dist/config.service");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const Sentry = require("@sentry/node");
const helmet = require("helmet");
const pipes_1 = require("@nestjs/common/pipes");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
    });
    const configService = app.get(config_service_1.ConfigService);
    app.enableCors();
    app.use(helmet());
    app.useGlobalPipes(new pipes_1.ValidationPipe());
    app.setGlobalPrefix('v1');
    app.useStaticAssets(path_1.join('./public', 'assets'));
    app.setBaseViewsDir(path_1.join('./public', 'views'));
    app.setViewEngine('hbs');
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map