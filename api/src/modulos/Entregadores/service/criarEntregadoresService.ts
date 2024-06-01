import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregadoresEntity } from '../entity/entregadores.entity';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';
import { CriaEntregadoresDTO } from '../dto/Entregadores';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CriarEntregadoresService {
  constructor(
    private readonly entregadoresRepositorio: EntregadoresRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregadoresController');
  }

  async cadastraEntregadores(data: CriaEntregadoresDTO): Promise<EntregadoresEntity> {
    const entregadoresEntity = new EntregadoresEntity();


    Object.assign(entregadoresEntity, data as EntregadoresEntity);

    try {
      await this.entregadoresRepositorio.salvar(entregadoresEntity);
      this.logger.logObjeto(HttpStatus.OK, 'Entregadores criado', entregadoresEntity);
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, entregadoresEntity);
    }
    return entregadoresEntity;
  }
}
