/*
 * @Author: beck
 * @Description: 七牛云模块
 * @Date: 2022-10-06 16:57:22
 * @LastEditTime: 2022-10-06 16:58:13
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\qiniuyun\qiniuyun.module.ts
 */
import { Module } from '@nestjs/common';
import { QiniuyunController } from './qiniuyun.controller';

@Module({
  controllers: [QiniuyunController],
})
export class QiniuyunModule {}
