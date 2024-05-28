import { Injectable } from '@nestjs/common';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';

@Injectable()
export class ValidarClienteService {
  constructor(private readonly autor: EntregadoresRepositorio) {}

  async validaEmailExistente(email: string): Promise<boolean> {
    return await this.autor.validaEmailExistente(email);
  }

  async validaEntregadoresPeloNome(nome: string): Promise<boolean> {
    return await this.autor.validaEntregadoresPeloNome(nome);
  }

  async retornaEntregadoresIdPeloNome(nome: string) {
    return await this.autor.retornaEntregadoresIdPeloNome(nome);
  }
}
