import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: false })
  username: string;
  @ApiProperty({ required: false })
  password: string;
  @ApiProperty({ required: false })
  email?: string;
  @ApiProperty({ required: false })
  mobile?: string;
  @ApiProperty({ required: false })
  status: boolean;
  createUserId: number;
}
