/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 18:08:07
 * @LastEditTime: 2022-09-30 09:40:06
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\dto\user.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class userDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
