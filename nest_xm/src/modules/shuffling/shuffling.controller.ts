/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 18:06:29
 * @LastEditTime: 2022-10-07 10:51:40
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\shuffling\shuffling.controller.ts
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
import { ShufflingService } from './shuffling.service';
import { CreateShufflingDto } from './dto/create-shuffling.dto';
import { UpdateShufflingDto } from './dto/update-shuffling.dto';
import {
  ApiTags,
  ApiOperation,
  ApiHeader,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Modify } from 'src/common/api.response.dto/modify.dto';
import { DeleteRes } from 'src/common/api.response.dto/delect.dto';

@ApiTags('轮播图')
@Controller('shuffling')
export class ShufflingController {
  constructor(private readonly shufflingService: ShufflingService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '添加轮播图' })
  @ApiBody({ type: [CreateShufflingDto] })
  @Post()
  create(@Body() createShufflingDto: CreateShufflingDto[], @Request() req) {
    createShufflingDto.forEach((item) => {
      item.createUserId = req.user.userId;
    });
    return this.shufflingService.create(createShufflingDto);
  }

  @ApiOperation({ summary: '获取所有轮播图' })
  @Get()
  findAll() {
    return this.shufflingService.findAll();
  }

  @ApiOperation({ summary: '根据id获取轮播图' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shufflingService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '修改轮播图' })
  @ApiResponse({ type: [Modify] })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShufflingDto: UpdateShufflingDto,
  ) {
    return this.shufflingService.update(+id, updateShufflingDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', required: true })
  @ApiOperation({ summary: '删除轮播图' })
  @ApiResponse({ type: [DeleteRes] })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shufflingService.remove(+id);
  }
}
