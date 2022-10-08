/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 17:33:44
 * @LastEditTime: 2022-09-28 18:26:53
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\auth\jwt.strategy.ts
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
