import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AtualizaEntregasDTO {};

@Injectable()
export class CriaEntregasDTO {};