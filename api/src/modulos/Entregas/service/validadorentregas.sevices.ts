import { Injectable } from '@nestjs/common';
import { EntregasRepository } from '../repository/entregas_repositorio';

@Injectable()
export class ValidadorEntregasServices {
  constructor(private readonly entregas: EntregasRepository) {}

  async validaEntregasExistente(textoEntregas: string): Promise<boolean> {
    return await this.entregas.validaEntregasExistente(textoEntregas);
  }

  async retornaSlugCategoria(textoCategoria: string) {
    return await this.entregas.retornaSlugCategoria(textoCategoria);
  }
}
