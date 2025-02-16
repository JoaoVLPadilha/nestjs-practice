import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConfigService } from '@nestjs/config';
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
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

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
    const result = this.configService.get('S3_BUCKET');
    console.log(result);
    const isAuth = this.authService.isAuthenticathed('1234');
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
    return await this.usersRepository.findOneBy({ id });
  }
}
