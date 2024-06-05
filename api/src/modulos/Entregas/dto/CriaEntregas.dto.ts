import { IsInt, IsNotEmpty, IsNumberString, IsObject, ValidateNested } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { Type } from 'class-transformer';
import { CriaEnderecoEntregaDTO } from './CriaEnderecoEntrega.dto';

@Injectable()
export class CriaEntregasDTO {

  @IsNotEmpty({ message: 'O campo geolocalização deve ser informado.' })
  @IsNumberString(undefined, {
    message: 'O campo CPF deve conter apenas números.',
  })
  geolocalizacao: string;

  @IsNotEmpty({ message: 'O campo largura (em centimetros) deve ser informado.' })
  @IsInt({ message: 'O campo largura (em centimetros) deve ser um inteiro.' })
  largura: number;

  @IsNotEmpty({ message: 'O campo altura (em centimetros) deve ser informado.' })
  @IsInt({ message: 'O campo altura (em centimetros) deve ser um inteiro.' })
  altura: number;

  @IsNotEmpty({ message: 'O campo peso (em gramas) deve ser informado.' })
  @IsInt({ message: 'O campo peso (em gramas) deve ser um inteiro.' })
  peso: number;

  codigoConfirmacao: string;

  codigoColeta: string;

  @ValidateNested()
  @IsObject()
  @IsNotEmpty({ message: 'O endereço de entrega deve ser informado.' })
  @Type(() => CriaEnderecoEntregaDTO)
  enderecoEntrega: CriaEnderecoEntregaDTO;
}
