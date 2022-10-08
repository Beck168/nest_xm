/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:36:06
 * @LastEditTime: 2022-10-06 14:27:06
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\brand.module.ts
 */
import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Brand } from './entities/brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
