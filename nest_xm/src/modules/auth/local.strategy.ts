/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 16:12:22
 * @LastEditTime: 2022-10-08 15:19:29
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\auth\local.strategy.ts
 */
const md5 = require('md5');
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    password = md5(password);
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('账号或密码错误');
    }
    return user;
  }
}
