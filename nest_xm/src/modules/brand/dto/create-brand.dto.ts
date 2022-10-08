/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:36:06
 * @LastEditTime: 2022-10-06 17:25:46
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\dto\create-brand.dto.ts
 */
import { ApiProperty } from '@nestjs/swagger';
export class CreateBrandDto {
  @ApiProperty({ description: '是否启用' })
  enable: boolean;
  @ApiProperty({ description: '品牌名字' })
  name: string;
  @ApiProperty({ description: '品牌图片地址' })
  logo: string;
  @ApiProperty({
    required: false,
    description: '排列顺序(默认为10,越小排的越前)',
  })
  sort?: number;
  createUserId: number;
}
