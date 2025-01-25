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
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(postTypeEnum)
  postType: postTypeEnum;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsEnum(statusEnum)
  status: statusEnum;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  @IsJSON()
  schema?: string;

  @IsOptional()
  @IsString()
  featuredImageUrl?: string;

  @IsISO8601()
  publishOn: Date;

  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags: string[];
}
