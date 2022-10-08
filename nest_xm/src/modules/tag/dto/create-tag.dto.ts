/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 11:17:24
 * @LastEditTime: 2022-10-07 11:29:53
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\tag\dto\create-tag.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class CreateTagDto {
  @ApiProperty({ description: '标签内容' })
  content: string;
  createUserId: number;
}
