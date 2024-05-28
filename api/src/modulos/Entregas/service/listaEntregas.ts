import { EntregasEntity } from '../entity/entregas.entity';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class ListarEntregasService {
  constructor(
    private readonly entregasRepositorio: EntregasRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('Entregas Controller');
  }

  async listarEntregas(): Promise<EntregasEntity[]> {
    return await this.EntregasRepositorio.listarTodos();
  } 
}
