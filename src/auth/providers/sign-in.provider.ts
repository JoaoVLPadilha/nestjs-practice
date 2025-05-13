import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { BcryptProvider } from './bcrypt.provider';
import { AuthService } from '../auth.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private hashingProvider: HashingProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneUserByEmail(signInDto.email);
    let isPasswordCorrect = false;
    if (user) {
      try {
        isPasswordCorrect = await this.hashingProvider.comparePassword(
          signInDto.password,
          user.password,
        );
      } catch (error) {
        throw new RequestTimeoutException('Failed to fetch compare');
      }

      if (isPasswordCorrect) return user;

      throw new ForbiddenException('Password incorrect');
    }
  }
}
