import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  ServiceUnavailableException,
} from '@nestjs/common';
import { log } from 'console';

/*
 * @Author: beck
 * @Description: 监听全局异常
 * @Date: 2022-09-30 11:23:08
 * @LastEditTime: 2022-10-06 16:43:17
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\common\base.exception.ts
 */
@Catch()
export class BaseException implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const message = exception.message;

    let errMsg = message;
    if (message.indexOf('Duplicate entry') > -1) {
      const err: string[] = message.split(' ');
      errMsg = `'${err[2]}'是唯一值,在数据库中已存在`;
    }
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
      statusCode: HttpStatus.SERVICE_UNAVAILABLE,
      timestamp: new Date().toISOString(),
      path: request.path,
      message: errMsg,
    });
  }
}
