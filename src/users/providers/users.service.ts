import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}
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
  public findOne(id: string) {
    const isAuth = this.authService.isAuthenticathed('1234');
    console.log(isAuth);
    return {
      name: 'John Doe',
      email: 'john@doe.coom',
    };
  }
}
