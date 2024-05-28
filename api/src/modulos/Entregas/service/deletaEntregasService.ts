import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class DeletaEntregasService {
  constructor(
    private readonly entregasRepositorio: EntregasRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregasController');
  }

  async deletaEntregas(id: string) {
    try {
      await this.entregasRepositorio.deletaEntregas(id);
      this.logger.logObjeto(HttpStatus.OK, 'Entrega excluida', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
