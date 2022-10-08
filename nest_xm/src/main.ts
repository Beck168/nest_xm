/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:40:34
 * @LastEditTime: 2022-10-08 14:47:23
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ResponseInterceptor } from './common/responseInterceptor';
import { HttpExceptions } from './common/httpException';
import { BaseException } from './common/base.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('后台文档')
    .setDescription('后台管理系统文档')
    .setVersion('1.0')
    .addTag('JM')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new BaseException(), new HttpExceptions());
  await app.listen(3000);
}
bootstrap();
