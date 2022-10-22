import { PartialType } from '@nestjs/mapped-types';
import { CreateSignAndVerifyDto } from './create-sign-and-verify.dto.js';

export class UpdateSignAndVerifyDto extends PartialType(
  CreateSignAndVerifyDto,
) {}
