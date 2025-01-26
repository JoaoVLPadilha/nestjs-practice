import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  isArray,
  IsDate,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
export enum postTypeEnum {
  Post = 'post',
  Page = 'page',
  Story = 'story',
  Series = 'series',
}
export enum statusEnum {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Review = 'review',
  Published = 'published',
}
export class CreatePostsDto {
  @ApiProperty({
    description: 'This is the title for the blog post',
    example: 'This is a title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: postTypeEnum,
    description: 'this is the possible values',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(postTypeEnum)
  postType: postTypeEnum;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    enum: statusEnum,
    example: 'This is the possible values',
  })
  @IsEnum(statusEnum)
  status: statusEnum;

  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: '',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'This needs to be a valid json',
    example: '',
  })
  @IsOptional()
  @IsString()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'This is',
    example: '',
  })
  @IsOptional()
  @IsString()
  featuredImageUrl?: string;

  @IsISO8601()
  publishOn: Date;

  @ApiPropertyOptional({
    type: 'array',
    description: 'This is',
    example: '',
  })
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: string[];
}
