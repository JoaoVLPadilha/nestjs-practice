import { Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        name: 'John Doe',
        email: 'john@doe.coom',
      },
      {
        name: 'Jane Doe',
        email: 'Jane@doe.coom',
      },
    ];
  }
  public findOne(id: number) {
    return {
      name: 'John Doe',
      email: 'john@doe.coom',
    };
  }
}
