import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './meta-options.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private metaOptionsService: MetaOptionsService) {}
  @Post()
  public createMetaOptions(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    console.log('createPostMetaOptionsDto', createPostMetaOptionsDto);
    return this.metaOptionsService.createMetaOption(createPostMetaOptionsDto);
  }
}
