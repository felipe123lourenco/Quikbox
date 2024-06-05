import { IsNotEmpty, MaxLength } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriaEntregasDTO {
  @IsNotEmpty({ message: 'O código do cliente deve ser informado.' })
  clienteId: string;

  @IsNotEmpty({ message: 'A latitude deve ser informada.' })
  @MaxLength(20, { message: 'A latitude deve ter no máximo 20 caracteres.' })
  latitude: string;

  @IsNotEmpty({ message: 'A longitude deve ser informada.' })
  @MaxLength(20, { message: 'A longitude deve ter no máximo 20 caracteres.' })
  longitude: string;

  @IsNotEmpty({ message: 'O logradouro deve ser informado.' })
  @MaxLength(200, {
    message: 'O logradouro deve ter no máximo 200 caracteres.',
  })
  logradouro: string;

  @IsNotEmpty({ message: 'O número deve ser informado.' })
  @MaxLength(20, { message: 'O número deve ter no máximo 20 caracteres.' })
  numero: string;

  @IsNotEmpty({ message: 'O complemento deve ser informado.' })
  @MaxLength(50, { message: 'O complemento deve ter no máximo 50 caracteres.' })
  complemento: string;

  @IsNotEmpty({ message: 'O bairro deve ser informado.' })
  @MaxLength(100, { message: 'O bairro deve ter no máximo 100 caracteres.' })
  bairro: string;

  @IsNotEmpty({ message: 'A cidade deve ser informada.' })
  @MaxLength(100, { message: 'A cidade deve ter no máximo 100 caracteres.' })
  cidade: string;

  @IsNotEmpty({ message: 'O estado deve ser informado.' })
  @MaxLength(2, { message: 'O estado deve ter no máximo 2 caracteres.' })
  estado: string;

  @IsNotEmpty({ message: 'O cep deve ser informado.' })
  @MaxLength(8, { message: 'O cep deve ter no máximo 8 caracteres.' })
  cep: string;

  @IsNotEmpty({ message: 'A largura (em centimetros) deve ser informada.' })
  largura: number;

  @IsNotEmpty({ message: 'A altura (em centimetros) deve ser informada.' })
  altura: number;

  @IsNotEmpty({ message: 'O peso (em gramas) deve ser informado.' })
  peso: number;
}
