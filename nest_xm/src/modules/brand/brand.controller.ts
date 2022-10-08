/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:36:06
 * @LastEditTime: 2022-10-07 17:58:14
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\brand\brand.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiHeader, ApiBody } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { Enable } from './dto/enable-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('品牌管理')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '创建品牌' })
  @Post()
  create(@Body() createBrandDto: CreateBrandDto, @Request() req) {
    createBrandDto.createUserId = req.user.userId;
    return this.brandService.create(createBrandDto);
  }

  @ApiOperation({ summary: '获取所有品牌' })
  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @ApiOperation({ summary: '根据id获取品牌' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '根据id修改品牌' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '删除品牌' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '修改是否禁用状态' })
  @ApiBody({ type: Enable })
  @Put(':id')
  forbidden(@Param('id') id: string, @Body() enable: Enable) {
    return this.brandService.forbidden(+id, enable.enable);
  }
}
