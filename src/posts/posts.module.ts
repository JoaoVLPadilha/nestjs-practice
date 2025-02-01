import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule, TypeOrmModule.forFeature([User, Post])],
})
export class PostsModule {}
