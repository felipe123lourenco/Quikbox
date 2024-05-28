import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregasEntity } from '../entity/entregas.entity';
import { EntregasRepositorio } from '../repository/entregas_repositorio';
import { CriaEntregasDTO } from '../dto/entregasDTO';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class CriarEntregasService {
  constructor(
    private readonly clienteRepositorio: EntregasRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregasController');
  }

  async cadastraEntregas(data: CriaEntregasDTO): Promise<EntregasEntity> {
    const entregasEntity = new EntregasEntity();

    Object.assign(entregasEntity, data as EntregasEntity);

    try {
      await this.clienteRepositorio.salvar(entregasEntity);
      this.logger.logObjeto(HttpStatus.OK, 'Entrega criada', entregasEntity);
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, entregasEntity);
    }
    return entregasEntity;
  }
}
