import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers() {
    return 'You send a request to users endpoint';
  }

  @Post()
  public createUser() {
    return 'You send a request to create a user';
  }

  @Put()
  public updateUser() {
    return 'You send a request to update a user';
  }

  @Delete()
  public deleteUser() {
    return 'You send a request to delete a user';
  }

  @Patch()
  public patchUser() {
    return 'You send a request to patch a user';
  }
}
