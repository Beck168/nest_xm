/*
 * @Author: beck
 * @Description:分类实体模型
 * @Date: 2022-10-06 17:09:35
 * @LastEditTime: 2022-10-07 10:08:25
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\classification\entities\classification.entity.ts
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Classification {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: '分类名称', unique: true })
  name: string;
  @Column({ default: true, comment: '是否启用' })
  enable: boolean;
  @Column({ comment: '顺序', default: 1 })
  sort: number;
  @Column({ comment: '创建人id' })
  createUserId: number;
  @CreateDateColumn({ comment: '创建时间' })
  createdAt;
  @UpdateDateColumn({ comment: '更新时间' })
  updatedAt;
}
