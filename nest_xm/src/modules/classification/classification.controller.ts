/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 17:09:35
 * @LastEditTime: 2022-10-06 18:08:46
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\classification\classification.controller.ts
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
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClassificationService } from './classification.service';
import { CreateClassificationDto } from './dto/create-classification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';

@ApiTags('分类管理')
@Controller('classification')
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '创建分类' })
  @Post()
  create(
    @Body() createClassificationDto: CreateClassificationDto,
    @Request() req,
  ) {
    createClassificationDto.createUserId = req.user.userId;
    return this.classificationService.create(createClassificationDto);
  }

  @ApiOperation({ summary: '查询所有分类' })
  @Get()
  findAll() {
    return this.classificationService.findAll();
  }

  @ApiOperation({ summary: '根据id查询分类' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classificationService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '根据id修改分类' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassificationDto: UpdateClassificationDto,
  ) {
    return this.classificationService.update(+id, updateClassificationDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '根据id删除分类' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classificationService.remove(+id);
  }
}
