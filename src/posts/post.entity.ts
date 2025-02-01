import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postTypeEnum, statusEnum } from './dtos/create-posts.dto';
import { CreatePostMetaOptionsDto } from 'src/meta-options/dtos/create-post-meta-options.dto';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    enum: postTypeEnum,
  })
  postType: postTypeEnum;

  @Column()
  slug: string;

  @Column({
    enum: statusEnum,
  })
  status: statusEnum;

  @Column({
    nullable: true,
  })
  content?: string;

  @Column({
    nullable: true,
  })
  schema?: string;

  @Column({
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column()
  publishOn: Date;
  // @Column({
  //   array: true,
  // })
  // tags: string[];

  @OneToOne(() => MetaOption)
  @JoinColumn()
  metaOptions?: MetaOption[];
}
