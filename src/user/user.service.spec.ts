import { Test, TestingModule } from '@nestjs/testing';
import User from './user.entity';
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

  describe('when getting a user', () => {
    it('should return a string', () => {
      const user = new User('demo@account.net', 'serge', 'wilfried',12312652024324,55000,75985);
      expect(
        typeof service.add(user)
      ).toEqual('IUser')
    })
  })
  
});
