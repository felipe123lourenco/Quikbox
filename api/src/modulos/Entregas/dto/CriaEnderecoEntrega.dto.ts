import { IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';

export class CriaEnderecoEntregaDTO {
  id: string;

  @IsNotEmpty({ message: 'O nome da rua não pode ser vazio.' })
  rua: string;

  @IsNotEmpty({ message: 'O numero da casa não pode ser vazio.' })
  numero: string;

  @IsNotEmpty({ message: 'O bairro não pode ser vazio.' })
  bairro: string;

  @IsNotEmpty({ message: 'A cidade não pode ser vazia.' })
  cidade: string;

  @IsNotEmpty({ message: 'O Estado não pode ser vazio.' })
  estado: string;

  @IsNotEmpty({ message: 'O campo UF não pode ser vazio.' })
  @MaxLength(2, { message: 'O campo UF deve ter no máximo 2 caracteres.' })
  UF: string;

  @IsNotEmpty({ message: 'O CEP não pode ser vazio.' })
  @IsNumberString(undefined, { message: 'O CEP deve conter apenas números.' })
  cep: string;

  @IsNotEmpty({ message: 'O campo latitude não pode ser vazio.' })
  latitude: string;

  @IsNotEmpty({ message: 'O campo longitude não pode ser vazio.' })
  longitude: string;
}
