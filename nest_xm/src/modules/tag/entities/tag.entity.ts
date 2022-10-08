/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 11:17:24
 * @LastEditTime: 2022-10-07 11:46:33
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\tag\entities\tag.entity.ts
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ comment: '标签内容', unique: true })
  content: string;
  @Column({ comment: '创建人id' })
  createUserId: number;
  @CreateDateColumn({ comment: '创建时间' })
  createdAt;
  @UpdateDateColumn({ comment: '更新时间' })
  updatedAt;
}
