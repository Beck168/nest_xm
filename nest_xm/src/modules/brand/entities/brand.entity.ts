/*
 * @Author: beck
 * @Description:品牌实体
 * @Date: 2022-10-06 11:36:06
 * @LastEditTime: 2022-10-06 14:29:32
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\entities\brand.entity.ts
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: 'logo图片' })
  logo: string;
  @Column({ comment: '品牌名称', unique: true })
  name: string;
  @Column({ default: true, comment: '是否启用' })
  enable: boolean;
  @Column({ comment: '顺序' })
  sort: number;
  @Column({ comment: '创建人id' })
  createUserId: number;
  @CreateDateColumn({ comment: '创建时间' })
  createdAt;
  @UpdateDateColumn({ comment: '更新时间' })
  updatedAt;
}
