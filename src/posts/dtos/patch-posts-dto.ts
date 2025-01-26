import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostsDto } from './create-posts.dto';

export class PatchPostDto extends PartialType(CreatePostsDto) {
  @ApiProperty({
    description: 'id of the posts that will be changed',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
