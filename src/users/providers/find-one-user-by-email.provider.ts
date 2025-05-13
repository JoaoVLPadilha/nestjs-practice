import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findOneByEmail(email: string | undefined) {
    let userFound: User | undefined;

    try {
      userFound = await this.userRepository.findOneBy({
        email: email,
      });
    } catch (error) {
      throw new RequestTimeoutException('timeout', {
        description: 'Database giving timeout',
      });
    }

    if (userFound) return userFound;

    throw new NotFoundException('User not found');
  }
}
