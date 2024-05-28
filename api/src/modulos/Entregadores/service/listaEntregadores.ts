import { EntregadoresEntity } from '../entity/entregadores.entity';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class ListarEntregadoresService {
  constructor(
    private readonly entregadoreseRepositorio: EntregadoresRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('Entregadores Controller');
  }

  async listarEntregadores(): Promise<EntregadoresEntity[]> {
    return await this.entregadoreseRepositorio.listarTodos();
  } 
}
