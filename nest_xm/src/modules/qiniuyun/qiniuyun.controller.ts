/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 16:57:22
 * @LastEditTime: 2022-10-06 17:06:56
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\qiniuyun\qiniuyun.controller.ts
 */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
const qiniu = require('qiniu');

@ApiTags('七牛云')
@ApiHeader({ name: 'token', required: true })
@UseGuards(AuthGuard('jwt'))
@Controller('qiniuyun')
export class QiniuyunController {
  /**
   *给前端返回七牛云文件上传的token
   *
   */
  @ApiOperation({ summary: '获取七牛云上传文件的token' })
  @Get()
  getQnyToken() {
    const accessKey = 'zB6qMhH6UbKrL2leBZVzSZ2yTg-pWmen_3D6nLsO';
    const secretKey = 'y-B9B5iV3r47u261WP-vL6-M9kmLiGTnkBsk0W7U';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: 'libeck',
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }
}
