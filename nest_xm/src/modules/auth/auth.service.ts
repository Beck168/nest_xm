/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 16:03:32
 * @LastEditTime: 2022-09-28 16:37:18
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\auth\auth.service.ts
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUserName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    // console.log(user);
    // console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
