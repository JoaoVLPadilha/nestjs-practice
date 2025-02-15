import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dtos/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}
  public async createTag(createTagDto: CreateTagDto) {
    console.log(createTagDto);
    const newTag = await this.tagRepository.create(createTagDto);

    return await this.tagRepository.save(newTag);
  }

  public async getMultipleTags(tagsId: number[]) {
    return await this.tagRepository.find({
      where: {
        id: In(tagsId),
      },
    });
  }

  public async delete(id: number) {
    return await this.tagRepository.delete(id);
  }

  public async softDelete(id: number) {
    return await this.tagRepository.softDelete(id);
  }
}
