import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { postTypeEnum, statusEnum } from './dtos/create-posts.dto';

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
}
