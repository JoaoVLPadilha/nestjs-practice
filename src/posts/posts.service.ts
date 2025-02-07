import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class PostsService {
  constructor(
    private usersService: UsersService,
    private tagService: TagsService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}
  // public async createPost(createPostsDto: CreatePostsDto) {

  //   createPostsDto.author
  //   let newPost = this.postRepository.create(createPostsDto);
  //   return (newPost = await this.postRepository.save(newPost));
  // }

  public async findAll() {
    const post = await this.postRepository.find({
      relations: {
        metaOptions: true,
        tags: true,
      },
    });
    return post;
  }
  public async create(createPostsDto: CreatePostsDto) {
    const findUser = await this.usersService.findOne(createPostsDto.authorId);
    const tags = await this.tagService.getMultipleTags(createPostsDto.tags);
    console.log('tags', tags);
    if (findUser.email) {
      let newPost = this.postRepository.create({
        ...createPostsDto,
        author: findUser,
        tags,
      });
      console.log(newPost);
      return await this.postRepository.save(newPost);
    }
  }

  public async delete(id: number) {
    await this.postRepository.delete(id);

    return { deleted: true, id };
  }
}
