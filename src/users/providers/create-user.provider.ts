import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {

    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
      @Inject(forwardRef(() =>HashingProvider))
      private hashingProvider: HashingProvider,
    ) {}

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
      console.log(this.usersRepository.create)
      let newUser = this.usersRepository.create({
        ...createUserDto,
        password: await this.hashingProvider.hashPassword(createUserDto.password)
      });
      newUser = await this.usersRepository.save(newUser);
      return newUser;
    }
}
