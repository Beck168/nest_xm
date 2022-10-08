/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:55:36
 * @LastEditTime: 2022-10-06 15:53:39
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //判断用户是否已存在
    if (
      await this.usersRepository.findOne({
        where: { username: createUserDto.username },
      })
    ) {
      return createUserDto.username + '已存在';
    }
    //保存创建的用户信息(开启事务)
    return await this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number, user) {
    let result;
    if (user.username === 'admin' || user.userId == id) {
      await this.dataSource.transaction(async (manager) => {
        result = await manager.delete(User, id);
      });
      return result;
    }
    return '权限不足';
  }

  async findOneByUserName(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username: username } });
  }
}
