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
     const retorno = await this.clienteRepositorio.salvar(data);
      this.logger.logObjeto(HttpStatus.OK, 'Cliente criado', data);
    return retorno;
  }
}
