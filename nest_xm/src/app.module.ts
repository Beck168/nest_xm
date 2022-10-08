/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:40:34
 * @LastEditTime: 2022-10-08 09:50:40
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { BrandModule } from './modules/brand/brand.module';
import { Brand } from './modules/brand/entities/brand.entity';
import { QiniuyunModule } from './modules/qiniuyun/qiniuyun.module';
import { ClassificationModule } from './modules/classification/classification.module';
import { Classification } from './modules/classification/entities/classification.entity';
import { ShufflingModule } from './modules/shuffling/shuffling.module';
import { Shuffling } from './modules/shuffling/entities/shuffling.entity';
import { TagModule } from './modules/tag/tag.module';
import { Tags } from './modules/tag/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '59.110.23.7',
      port: 3306,
      username: 'nestxm',
      password: 'Bliqihuan123',
      database: 'nestxm',
      entities: [User, Brand, Classification, Shuffling, Tags],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    BrandModule,
    QiniuyunModule,
    ClassificationModule,
    ShufflingModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
