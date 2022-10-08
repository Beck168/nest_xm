/*
 * @Author: beck
 * @Descripticlass
 * @Date: 2022-10-07 10:42:04
 * @LastEditTime: 2022-10-07 10:51:56
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\common\api.response.dto\modify.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';

export class Modify {
  @ApiProperty()
  generatedMaps: any;
  @ApiProperty()
  raw: any;
  @ApiProperty({ description: '影响的条数' })
  affected: number;
}
