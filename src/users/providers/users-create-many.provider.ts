import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { DataSource } from 'typeorm';
import { CreateManyDto } from '../dtos/create-many.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}

  public async createMany(createManyDto: CreateManyDto) {
    let newUsers: User[] = [];
    let queryRunner;

    try {
      // Create Query Runner Instance
      queryRunner = this.dataSource.createQueryRunner();
      // Connect Query Runner to datasource
      await queryRunner.connect();
      // Start Transaction
      await queryRunner.startTransaction();
    } catch (error) {
      throw new BadRequestException({
        message: 'Connection with database fail',
      });
    }

    try {
      for (let user of createManyDto.createManyUsers) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException({
        message: 'Could not complete the exception',
        description: JSON.stringify(error),
      });
    } finally {
      await queryRunner.release();
    }
    // If successful commit
    // If unsuccessful rollback
    // Release connection

    return newUsers;
  }
}
