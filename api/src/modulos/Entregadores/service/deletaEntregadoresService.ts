import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class DeletaEntregadoresService {
  constructor(
    private readonly entregadoresRepositorio: EntregadoresRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('ClienteController');
  }

  async deletaCliente(id: string) {
    try {
      await this.entregadoresRepositorio.deletaEntregadores(id);
      this.logger.logObjeto(HttpStatus.OK, 'Entregador excluido', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
