import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Test, TestingModule } from '@nestjs/testing';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { AuthorizeMfaDto } from './core/AuthorizeMfaDto';
import { TransactionDTO } from './core/transaction.dto';
import { VerifyMfaDto } from './core/VerifyMfaDto';

describe('AppController', () => {
  let app: TestingModule;
  let validAirtimeDTO: TransactionDTO
  let invalidAirtimeDTO: TransactionDTO
  let validCollectDTO: TransactionDTO
  let invalidCollectDTO: TransactionDTO
  let validAuthorizeMfaDto: AuthorizeMfaDto
  let invalidAuthorizeMfaDto: AuthorizeMfaDto
  let validVerifyMfaDto: VerifyMfaDto
  let invalidVerifyMfaDto: VerifyMfaDto

  
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'public'),
          exclude: ['/api*'],
        }),
        ConfigModule.forRoot({
          isGlobal: true,
          load: [configuration],
          cache: true,
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    
  });

  describe('::POST /collect', () => {
    it('should pass with valid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.debit(validCollectDTO)).toBe(validCollectDTO);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.debit(invalidCollectDTO)).toBe(invalidCollectDTO);
    });
  });

  describe('::POST /airtime', () => {
    it('should pass with valid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.airtime(validAirtimeDTO)).toBe(validAirtimeDTO);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.airtime(invalidAirtimeDTO)).toBe(validAirtimeDTO);
    });
  });

  describe('::POST /mfa/authorize', () => {
    it('should pass with valid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.authorize(validAuthorizeMfaDto)).toBe(validAuthorizeMfaDto);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.authorize(invalidAuthorizeMfaDto)).toBe(invalidAuthorizeMfaDto);
    });
  });

  describe('::POST /mfa/verify', () => {
    it('should pass with valid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.verifiy(validVerifyMfaDto)).toBe(validVerifyMfaDto);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.verifiy(invalidVerifyMfaDto)).toBe(invalidVerifyMfaDto);
    });
  });
});
