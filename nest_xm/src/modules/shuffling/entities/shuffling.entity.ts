/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 18:06:29
 * @LastEditTime: 2022-10-07 10:31:42
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\shuffling\entities\shuffling.entity.ts
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Shuffling {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: true, comment: '是否启用(0:false,1:true)' })
  enable: boolean;
  @Column({ default: true, comment: '图片地址' })
  imgUrl: string;
  @Column({ comment: '顺序', default: 1 })
  sort: number;
  @Column({ comment: '创建人id' })
  createUserId: number;
  @CreateDateColumn({ comment: '创建时间' })
  createdAt;
  @UpdateDateColumn({ comment: '更新时间' })
  updatedAt;
}
