/*
 * @Author: beck
 * @Description:
 * @Date: 2022-09-28 14:55:36
 * @LastEditTime: 2022-09-30 13:41:57
 * @FilePath: \项目nestjs_vue_ts\nest_xm\src\modules\users\users.controller.ts
 */

const md5 = require('md5');
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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';

@ApiTags('用户')
@ApiHeader({ name: 'token', required: true })
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '创建用户',
    description: '创建用户',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Request() req) {
    console.log(req.user);
    createUserDto.password = md5(createUserDto.password);
    createUserDto.createUserId = req.user.userId;
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({
    summary: '查询全部用户',
    description: '查询全部用户',
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({
    summary: '根据id查询用户',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({
    summary: '根据id修改用户',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = md5(updateUserDto.password);
    }
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({
    summary: '根据id删除用户',
  })
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    console.log(req.user);
    return this.usersService.remove(+id, req.user);
  }
}
