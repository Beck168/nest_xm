/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 17:09:35
 * @LastEditTime: 2022-10-06 17:52:37
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\classification\classification.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassificationDto } from './dto/create-classification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';
import { Classification } from './entities/classification.entity';

@Injectable()
export class ClassificationService {
  @InjectRepository(Classification)
  private classRepository: Repository<Classification>;
  async create(createClassificationDto: CreateClassificationDto) {
    return await this.classRepository.save(createClassificationDto);
  }

  async findAll() {
    return await this.classRepository.find();
  }

  async findOne(id: number) {
    return await this.classRepository.findOne({ where: { id } });
  }

  async update(id: number, updateClassificationDto: UpdateClassificationDto) {
    return await this.classRepository.update(id, updateClassificationDto);
  }

  async remove(id: number) {
    return await this.classRepository.delete(id);
  }
}
