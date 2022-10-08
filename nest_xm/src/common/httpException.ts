/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-30 10:21:48
 * @LastEditTime: 2022-10-06 16:15:32
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\common\httpException.ts
 */
import {
  Catch,
  HttpException,
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptions implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      data: exception.message,
      time: new Date().toISOString(),
      success: false,
      path: request.url,
      status,
    });
  }
}
