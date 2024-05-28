import {
  ValidationOptions,
  ValidatorConstraint,
  registerDecorator,
} from 'class-validator';
import { ClienteRepositorio } from '../repository/cliente_repositorio';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailNotExistente {
  constructor(private clienteRepository: ClienteRepositorio) {}

  async validate(value: any): Promise<boolean> {
    const clienteExiste = await this.clienteRepository.validaEmailExistente(value);
    return !clienteExiste;
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
