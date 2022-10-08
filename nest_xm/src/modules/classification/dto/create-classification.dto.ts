/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 17:09:35
 * @LastEditTime: 2022-10-06 17:41:29
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\classification\dto\create-classification.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class CreateClassificationDto {
  @ApiProperty({ description: '分类名字' })
  name: string;
  @ApiProperty({ description: '是否启用' })
  enable: boolean;
  @ApiProperty({
    required: false,
    description: '排列顺序(默认为10,越小排的越前)',
  })
  sort?: number;
  createUserId: number;
}
