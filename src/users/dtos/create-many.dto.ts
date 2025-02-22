import { IsArray, IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateManyDto {
  @IsArray()
  createManyUsers: CreateUserDto[];
}
