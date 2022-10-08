/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 18:06:29
 * @LastEditTime: 2022-10-07 10:12:27
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\shuffling\dto\create-shuffling.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class CreateShufflingDto {
  @ApiProperty({ description: '是否启用' })
  enable: boolean;
  @ApiProperty({
    required: false,
    description: '排列顺序(默认为1,越小排的越前)',
  })
  sort?: number;
  @ApiProperty({ description: '图片地址' })
  imgUrl: string;
  createUserId: number;
}
