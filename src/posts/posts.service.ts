import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private usersService: UsersService) {}
  public findAll(idUser: string) {
    const user = this.usersService.findOne(idUser);
    return [
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
    ];
  }
}
