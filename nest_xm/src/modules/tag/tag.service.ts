/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 11:17:24
 * @LastEditTime: 2022-10-07 15:32:55
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\tag\tag.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tags } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tags)
    private TagsRepository: Repository<Tags>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    return await this.TagsRepository.save(createTagDto);
  }

  async findAll() {
    return await this.TagsRepository.find();
  }

  async findAllById(id: number[]) {
    // const arr = [];
    // id.forEach(async (item) => {
    //   arr.push(await this.TagsRepository.findOne({ where: { id: item } }));
    // });
    // console.log(await this.TagsRepository.findOne({ where: { id: id[0] } }));

    // console.log(arr, '---------------------');

    return await this.TagsRepository.findByIds(id);
  }

  async remove(id: number) {
    return this.TagsRepository.delete(id);
  }
}
