import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config/dist/config.service';

import { join } from 'path';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
  // get an environment variable
  const configService = app.get(ConfigService);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1');
  app.useStaticAssets(join('./public', 'assets'));
  app.setBaseViewsDir(join('./public', 'views'));
  app.setViewEngine('hbs');
  await app.listen(configService.get('PORT'));
}

bootstrap();
