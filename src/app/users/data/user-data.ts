import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../entities/user';

export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        email: 'email1@email.com',
        name: 'user1',
      },
      {
        id: 2,
        email: 'email2@email.com',
        name: 'user2',
      },
      {
        id: 3,
        email: 'email3@email.com',
        name: 'user3',
      },
      {
        id: 4,
        email: 'email4@email.com',
        name: 'user4',
      },
    ];
    return { users };
  }
}
