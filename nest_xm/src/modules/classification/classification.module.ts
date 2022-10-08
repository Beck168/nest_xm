/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 17:09:35
 * @LastEditTime: 2022-10-06 17:33:48
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\classification\classification.module.ts
 */
import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { Classification } from './entities/classification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Classification])],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class ClassificationModule {}
