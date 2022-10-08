/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:40:34
 * @LastEditTime: 2022-10-08 15:31:06
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\app.controller.ts
 */
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { CreateUserDto } from './modules/users/dto/create-user.dto';
import { userDto } from './modules/users/dto/user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  /**登录
   * 判断是是否存在用户,
   * 存在登录成功,返回用户相关信息与token
   */

  @ApiTags('验证登录')
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: userDto, description: '输入用户和密码' })
  @Post('auth/login')
  async login(@Request() req) {
    if (req.user === 'false') {
      return {};
    }

    return {
      user: req.user,
      token: await (await this.authService.login(req.user)).access_token,
    };
  }
}
