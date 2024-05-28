import { Injectable } from '@nestjs/common';
import { ClienteRepositorio } from '../repository/cliente_repositorio';

@Injectable()
export class ValidarClienteService {
  constructor(private readonly autor: ClienteRepositorio) {}

  async validaEmailExistente(email: string): Promise<boolean> {
    return await this.autor.validaEmailExistente(email);
  }

  async validaClientePeloNome(nome: string): Promise<boolean> {
    return await this.autor.validaClientePeloNome(nome);
  }

  async retornaClienteIdPeloNome(nome: string) {
    return await this.autor.retornaClienteIdPeloNome(nome);
  }
}
