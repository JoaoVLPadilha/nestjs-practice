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
  ) {}

  public async createMany(createUsersDto: CreateUserDto[]) {
    return await this.usersCreateManyProvider.createMany(createUsersDto);
  }

  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException('timeout', {
        description: 'Database giving timeout',
      });
    }

    if (existingUser) {
      throw new BadRequestException('User already exist', {
        description: 'Email já definido',
      });
    }

    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
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
}
