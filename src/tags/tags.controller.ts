import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  public async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.createTag(createTagDto);
  }

  // @Delete()
  // public async delete(@Query('id', ParseIntPipe) id: number) {
  //   return await this.tagsService.delete(id);
  // }
  @Delete('/soft-delete')
  public async softDelete(@Query('id', ParseIntPipe) id: number) {
    return await this.tagsService.softDelete(id);
  }
}
