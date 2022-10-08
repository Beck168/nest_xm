/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 10:56:42
 * @LastEditTime: 2022-10-07 10:56:50
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\common\api.response.dto\delect.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class DeleteRes {
  @ApiProperty()
  raw: any;
  @ApiProperty({ description: '影响的条数' })
  affected: number;
}
