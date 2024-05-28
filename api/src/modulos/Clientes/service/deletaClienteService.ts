import { HttpStatus, Injectable } from '@nestjs/common';
import { ClienteRepositorio } from '../repository/cliente_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class DeletaCLienteService {
  constructor(
    private readonly clienteRepositorio: ClienteRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('ClienteController');
  }

  async deletaCliente(id: string) {
    try {
      await this.clienteRepositorio.deletaCliente(id);
      this.logger.logObjeto(HttpStatus.OK, 'Cliente excluido', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
