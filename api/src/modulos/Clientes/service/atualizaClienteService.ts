import { Injectable } from '@nestjs/common';
import { ClienteRepositorio } from '../repository/cliente_repositorio';
import { AtualizaClienteDTO } from '../dto/Cliente';

@Injectable()
export class AtualizaClienteService {
  constructor(private readonly clienteRepositorio: ClienteRepositorio) {}

  async atualizaCliente(id: string, dto: AtualizaClienteDTO) {
    return await this.clienteRepositorio.atualizaCliente(id, dto);
  }
}
