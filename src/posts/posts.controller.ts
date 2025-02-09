import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
    return this.postService.findAll();
  }

  @Post('/')
  public createPosts(@Body() createPostsDto: CreatePostsDto) {
    return this.postService.create(createPostsDto);
  }

  @Patch()
  public async patchPosts(@Body() patchPostsDto: PatchPostDto) {
    return await this.postService.update(patchPostsDto);
  }

  @Delete('/:id')
  public deletePosts(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.postService.delete(id);
  }
}
