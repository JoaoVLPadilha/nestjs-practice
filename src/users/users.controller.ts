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
  ParseArrayPipe,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateManyDto } from './dtos/create-many.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  @Get('/one/:id')
  public getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.usersService.findOne(id);
  }

  @Post()
  // @SetMetadata('authType', 'none')
  @Auth(AuthType.None)
  public createUser(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
  ) {
    console.log(createUserDto instanceof CreateUserDto);
    return this.usersService.createUser(createUserDto);
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

  @Post('create-many')
  public createManyUsers(@Body() createUsersDto: CreateManyDto) {
    return this.usersService.createMany(createUsersDto);
  }
}
