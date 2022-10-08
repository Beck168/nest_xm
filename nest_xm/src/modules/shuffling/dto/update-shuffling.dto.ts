import { PartialType } from '@nestjs/swagger';
import { CreateShufflingDto } from './create-shuffling.dto';

export class UpdateShufflingDto extends PartialType(CreateShufflingDto) {}
