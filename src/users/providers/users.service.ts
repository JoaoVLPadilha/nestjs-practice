import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';

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
  ) {}

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
    const isAuth = this.authService.isAuthenticathed('1234');
    console.log(isAuth);
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
  public findOne(id: string) {
    const isAuth = this.authService.isAuthenticathed('1234');
    console.log(isAuth);
    return {
      name: 'John Doe',
      email: 'john@doe.coom',
    };
  }
}
