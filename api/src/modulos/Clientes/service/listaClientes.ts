import { ClienteEntity } from '../entity/cliente.entity';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ClienteRepositorio } from '../repository/cliente_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class ListarClienteService {
  constructor(
    private readonly clienteRepositorio: ClienteRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('Cliente Controller');
  }

  async listarCliente(): Promise<ClienteEntity[]> {
    return await this.clienteRepositorio.listarTodos();
  } 

 async listarClienteEmail(email: string): Promise<ClienteEntity | null> {
    return await this.clienteRepositorio.listarClienteEmail(email);
  }
}

