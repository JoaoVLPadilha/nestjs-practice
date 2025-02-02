import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Injectable()
export class PostsService {
  constructor(
    private usersService: UsersService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}
  public async createPost(createPostsDto: CreatePostsDto) {
    let newPost = this.postRepository.create(createPostsDto);
    return (newPost = await this.postRepository.save(newPost));
  }

  public findAll(idUser: string) {
    const user = this.usersService.findOne(idUser);
    return [
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        user,
        title: 'Test Title',
        content: 'Test Content',
      },
    ];
  }
  public async create(createPostsDto: CreatePostsDto) {
    let newPost = this.postRepository.create(createPostsDto);
    return await this.postRepository.save(newPost);
  }
}
