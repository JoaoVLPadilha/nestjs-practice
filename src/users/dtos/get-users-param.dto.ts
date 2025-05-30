import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class GetUserParamDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  id?: number;
}
