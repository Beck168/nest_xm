/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 18:06:29
 * @LastEditTime: 2022-10-07 10:37:58
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\shuffling\shuffling.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShufflingDto } from './dto/create-shuffling.dto';
import { UpdateShufflingDto } from './dto/update-shuffling.dto';
import { Shuffling } from './entities/shuffling.entity';

@Injectable()
export class ShufflingService {
  constructor(
    @InjectRepository(Shuffling)
    private shufflingRepository: Repository<Shuffling>,
  ) {}

  async create(createShufflingDto: CreateShufflingDto[]) {
    createShufflingDto.forEach(async (itme) => {
      await this.shufflingRepository.save(itme);
    });
    return '添加成功';
  }

  async findAll() {
    return await this.shufflingRepository.find();
  }

  async findOne(id: number) {
    return await this.shufflingRepository.findOne({ where: { id } });
  }

  async update(id: number, updateShufflingDto: UpdateShufflingDto) {
    if (!(await this.findOne(id))) {
      return 'id不存在';
    }

    return await this.shufflingRepository.update(id, updateShufflingDto);
  }

  async remove(id: number) {
    return await this.shufflingRepository.delete(id);
  }
}
