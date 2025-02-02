import { Module } from '@nestjs/common';
import { MetaOption } from './meta-options.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptionsService } from './meta-options.service';
import { MetaOptionsController } from './meta-options.controller';

@Module({
  controllers: [MetaOptionsController],
  imports: [TypeOrmModule.forFeature([MetaOption])],
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
