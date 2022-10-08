/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:55:36
 * @LastEditTime: 2022-09-30 09:33:17
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\dto\create-user.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty({ required: false })
  email?: string;
  @ApiProperty({ required: false })
  mobile?: string;
  @ApiProperty()
  status: boolean;
  createUserId: number;
}
