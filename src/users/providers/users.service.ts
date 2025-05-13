import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';
import { DataSource, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyDto } from '../dtos/create-many.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
/**
 * Class to connect to Users
 */
@Injectable()
export class UsersService {
  /**
   * Constructor for inter dependencie modules
   * @param authService
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private configService: ConfigService,
    private readonly dataSource: DataSource,
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    private readonly userCreateProvider: CreateUserProvider,
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,
  ) {}

  public async createMany(createUsersDto: CreateManyDto) {
    return await this.usersCreateManyProvider.createMany(createUsersDto);
  }
  public async createUser(createUserDto: CreateUserDto) {
    console.log('createUserDto.password', createUserDto.password);
    return await this.userCreateProvider.createUser(createUserDto);
  }

  /**
   * Find all Users
   * @param getUserParamDto
   * @param limit
   * @param page
   * @returns
   */
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

  /**
   * Find one user
   * @param id
   * @returns
   */
  public async findOne(id: number) {
    let user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  public async findOneUserByEmail(email: string) {
    return this.findOneUserByEmailProvider.findOneByEmail(email);
  }
}
