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
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private hashingProvider: HashingProvider,
    // Avaible through lib
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
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

      if (isPasswordCorrect) {
        const accessToken = await this.jwtService.signAsync(
          {
            sub: user.id,
            email: user.email,
          },
          {
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            secret: this.jwtConfiguration.secret,
            expiresIn: this.jwtConfiguration.accessTokenTtl,
          },
        );

        return accessToken;
      }

      throw new ForbiddenException('Password incorrect');
    }
  }
}
