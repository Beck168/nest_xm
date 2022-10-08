/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:36:06
 * @LastEditTime: 2022-10-07 17:40:20
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\brand.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    return await this.brandRepository.save(createBrandDto);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    return await this.brandRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    return await this.brandRepository.update(id, updateBrandDto);
  }

  async remove(id: number) {
    return await this.brandRepository.delete(id);
  }
  async forbidden(id: number, enable: boolean) {
    return this.brandRepository.query(
      `update brand set enable = ${enable} where id = ${id}`,
    );
  }
}
