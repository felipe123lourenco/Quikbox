import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailNotExistente {
  constructor(private entregadoresRepository: EntregadoresRepositorio) {}

  async validate(value: any): Promise<boolean> {
    const entregadoresExiste = await this.entregadoresRepository.validaEmailExistente(value);
    return !entregadoresExiste;
  }
}

export const EmailNotExiste = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: emailNotExistente,
    });
  };
};
