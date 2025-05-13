import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInProvider } from './providers/sign-in.provider';
import { SignInDto } from './dtos/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private signInProvider: SignInProvider,
  ) {}

  public login(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }
  public isAuthenticathed(id: string) {
    return true;
  }
}
