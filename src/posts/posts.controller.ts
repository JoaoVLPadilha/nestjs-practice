import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { PatchUserDto } from 'src/users/dtos/patch-user.dto';
import { PatchPostDto } from './dtos/patch-posts-dto';

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
    return this.postService.createPost(createPostsDto);
  }

  @Patch()
  public patchPosts(@Body() patchPostsDto: PatchPostDto) {}
}
