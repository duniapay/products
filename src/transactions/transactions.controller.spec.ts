import { Test, TestingModule } from '@nestjs/testing';
import { TransactionDTO } from 'src/core/transaction.dto';
import { TransactionsController } from './transactions.controller';

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let validAirtimeDTO: TransactionDTO
  let invalidAirtimeDTO: TransactionDTO
  let validCollectDTO: TransactionDTO
  let invalidCollectDTO: TransactionDTO

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('::POST /collect', () => {
    it('should pass with valid params', () => {
      const appController = app.get<TransactionsController>(TransactionsController);
      expect(appController.debit(validCollectDTO)).toBe(validCollectDTO);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<TransactionsController>(TransactionsController);
      expect(appController.debit(invalidCollectDTO)).toBe(invalidCollectDTO);
    });
  });

  describe('::POST /airtime', () => {
    it('should pass with valid params', () => {
      const appController = app.get<TransactionsController>(TransactionsController);
      expect(appController.airtime(validAirtimeDTO)).toBe(validAirtimeDTO);
    });
    it('should fail with invalid params', () => {
      const appController = app.get<TransactionsController>(TransactionsController);
      expect(appController.airtime(invalidAirtimeDTO)).toBe(validAirtimeDTO);
    });
  });
});
