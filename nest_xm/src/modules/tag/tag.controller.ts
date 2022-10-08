/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-07 11:17:24
 * @LastEditTime: 2022-10-07 15:05:37
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\tag\tag.controller.ts
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
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';

import {
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteRes } from 'src/common/api.response.dto/delect.dto';
@ApiTags('标签')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '添加标签' })
  @Post()
  create(@Body() createTagDto: CreateTagDto, @Request() req) {
    createTagDto.createUserId = req.user.userId;
    return this.tagService.create(createTagDto);
  }

  @ApiOperation({ summary: '查询标签' })
  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @ApiOperation({ summary: '根据id数组查询标签' })
  @ApiBody({ type: [Number] })
  @Post('id')
  findAllById(@Body() id: number[]) {
    return this.tagService.findAllById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '删除标签' })
  @ApiResponse({ type: DeleteRes })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}
