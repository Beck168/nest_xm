/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 11:17:24
 * @LastEditTime: 2022-10-07 11:20:18
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\tag\tag.module.ts
 */
import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tags } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tags])],

  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
