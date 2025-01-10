import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Query,
  Body,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return `You send a request to users endpoint with id: ${JSON.stringify(getUserParamDto)} and query: ${`${JSON.stringify(limit + ' ' + page)}`}`;
  }

  @Post()
  public createUser(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
  ) {
    console.log(createUserDto instanceof CreateUserDto);
    return `You send a request to create a user with body: ${JSON.stringify(createUserDto)}, and headers: ${JSON.stringify(headers)}`;
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
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
