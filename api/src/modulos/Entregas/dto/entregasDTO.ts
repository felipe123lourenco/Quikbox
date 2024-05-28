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
export class CriaClienteDTO {
  @IsNotEmpty({ message: 'Endereço deve ser informado' })
  @IsString()
  endereco: string;

  @IsNotEmpty({ message: 'Geolocalização deve ser informado' })
  @IsString()
  geolocalizacao: string;

  @IsNotEmpty({ message: 'Dimensoes deve ser informado' })
  @IsString()
  Dimensoes: string;

  @IsNotEmpty({ message: 'Peso deve ser informado' })
  @IsString()
  peso: number;

  @IsNotEmpty({ message: 'Status deve ser informado' })
  @IsString()
  status: string;

  @IsNotEmpty({ message: 'Codigo de confirmação deve ser informado' })
  @IsString()
  codigo_confirmacao: string;

  @IsNotEmpty({ message: 'Codigo de coleta deve ser informado' })
  @IsString()
  codigo_coleta: string;
}

@Injectable()
export class AtualizaClienteDTO extends PartialType(CriaClienteDTO) {}

export class ListaDeClientesDTO {
  isbn: string;
  nome: string;
  cnpj: number;
  endereco: string;
}