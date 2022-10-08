import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:55:36
 * @LastEditTime: 2022-10-08 09:56:18
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\entities\user.entity.ts
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: true,
    nullable: false,
  })
  username: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  mobile: string;
  @Column({ default: true })
  status: boolean;
  @Column()
  createUserId: number;
  @CreateDateColumn()
  createdAt;
  @UpdateDateColumn()
  updatedAt;
}
