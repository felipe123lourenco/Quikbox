import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EmailNotExiste } from '../decorators/email-existente';
import { PartialType } from '@nestjs/mapped-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriaClienteDTO {
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @IsString()
  nome: string;

  @IsNotEmpty({ message: 'CNPJ deve ser informado' })
  @IsString()
  cnpj: number;

  @IsNotEmpty({ message: 'Endereço deve ser informado' })
  @IsString()
  endereco: string;

  @IsNotEmpty({ message: 'Latitude deve ser informado' })
  @IsString()
  latitude: string;

  @IsNotEmpty({ message: 'Longitude deve ser informado' })
  @IsString()
  longitude: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @EmailNotExiste({ message: 'Email já cadastrado' })
  email: string;
}

@Injectable()
export class AtualizaClienteDTO extends PartialType(CriaClienteDTO) {}

export class ListaDeClientesDTO {
  isbn: string;
  nome: string;
  cnpj: number;
  endereco: string;
}