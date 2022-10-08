/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 18:06:29
 * @LastEditTime: 2022-10-07 10:02:38
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\shuffling\shuffling.module.ts
 */
import { Module } from '@nestjs/common';
import { ShufflingService } from './shuffling.service';
import { ShufflingController } from './shuffling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shuffling } from './entities/shuffling.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shuffling])],

  controllers: [ShufflingController],
  providers: [ShufflingService],
})
export class ShufflingModule {}
