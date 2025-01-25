import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dtos/create-posts.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }

  @Post('/')
  public createPosts(@Body() createPostsDto: CreatePostsDto) {
    console.log(createPostsDto);
    return createPostsDto;
  }
}
