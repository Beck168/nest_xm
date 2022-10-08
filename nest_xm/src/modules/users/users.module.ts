/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:55:36
 * @LastEditTime: 2022-09-28 16:10:22
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\users.module.ts
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
