/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 17:54:57
 * @LastEditTime: 2022-10-07 17:56:16
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\dto\enable-brand.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class Enable {
  @ApiProperty({ description: '禁用状态' })
  enable: boolean;
}
