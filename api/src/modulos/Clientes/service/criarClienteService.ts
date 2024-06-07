import { HttpStatus, Injectable } from '@nestjs/common';
import { ClienteEntity } from '../entity/cliente.entity';
import { ClienteRepositorio } from '../repository/cliente_repositorio';
import { CriaClienteDTO } from '../dto/Cliente';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CriarClienteService {
  constructor(
    private readonly clienteRepositorio: ClienteRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('ClienteController');
  }

  async cadastraCliente(data: CriaClienteDTO) {
    const clienteEntity = new ClienteEntity();


    Object.assign(clienteEntity, data as ClienteEntity);

    try {
      await this.clienteRepositorio.salvar(clienteEntity);
      this.logger.logObjeto(HttpStatus.OK, 'Clientes criado', clienteEntity);
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, clienteEntity);
    }
    return clienteEntity;
  }
}
