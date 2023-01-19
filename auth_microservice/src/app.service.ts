import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '4567',
    },
    {
      userId: '456',
      stripeUserId: '7867',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    console.log(getUserRequest);
    return this.users.find((user) => user.userId === getUserRequest.userId) 
  }
}

