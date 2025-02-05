import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
export class TagsController {
  @Post()
  public create(@Body() createTagDto: CreateTagDto) {
    return createTagDto;
  }
}
