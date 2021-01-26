import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { TransactionsServiceMock } from './transactions.service.mock';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const TransactionsServiceProvider = {
      provide: TransactionsService,
      useClass: TransactionsServiceMock,
    };
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService,TransactionsServiceProvider],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
