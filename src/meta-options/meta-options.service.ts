import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MetaOption } from './meta-options.entity';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>,
  ) {}
  public async createMetaOption(
    createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    console.log('createPostMetaOptionsDto', createPostMetaOptionsDto);
    let newMetaOption = this.metaOptionsRepository.create(
      createPostMetaOptionsDto,
    );
    return await this.metaOptionsRepository.save(newMetaOption);
  }
}
