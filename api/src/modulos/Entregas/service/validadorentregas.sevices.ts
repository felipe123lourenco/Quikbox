import { Injectable } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';

@Injectable()
export class ValidadorEntregasServices {
  constructor(private readonly entregas: EntregasRepositorio) {}

  async validaEntregasExistente(textoEntregas: string): Promise<boolean> {
    return true;
  }

  async retornaSlugCategoria(textoCategoria: string) {
    return '';
  }
}
