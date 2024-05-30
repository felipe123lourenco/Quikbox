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
export class CriaEntregadoresDTO {
  id: string;
  senha: string;
  @IsNotEmpty({ message: 'Nome deve ser informado' })
  @IsString()
  nome: string;

  @IsNotEmpty({ message: 'CPF deve ser informado' })
  @IsString()
  cpf: number;

  @IsNotEmpty({ message: 'CNH deve ser informado' })
  @IsString()
  cnh: number;

  @IsNotEmpty({ message: 'Endereço deve ser informado' })
  @IsString()
  endereco: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @EmailNotExiste({ message: 'Email já cadastrado' })
  email: string;
}

@Injectable()
export class AtualizaEntregadoresDTO extends PartialType(CriaEntregadoresDTO) {}

export class ListaDeEntregadoresDTO {
  isbn: string;
  nome: string;
  cpf: number;
  cnh: number;
  endereco: number;
  email: string;  
}