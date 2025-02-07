import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  public async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.createTag(createTagDto);
  }
}
