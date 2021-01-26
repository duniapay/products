import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserServiceMock } from './user.service.mock';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const UserServiceProvider = {
      provide: UserService,
      useClass: UserServiceMock,
    };
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,UserServiceProvider],
    }).compile();

    service = module.get<UserService>(UserService);
  });

it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
