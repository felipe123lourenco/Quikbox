import { Injectable } from '@nestjs/common';
import { EntregadoresRepositorio } from '../repository/entregadores_repositorio';
import { AtualizaEntregadoresDTO } from '../dto/Entregadores';

@Injectable()
export class AtualizaEntregadoresService {
  constructor(private readonly entregadoresRepositorio: EntregadoresRepositorio) {}

  async atualizaEntregadores(id: string, dto: AtualizaEntregadoresDTO) {
    return await this.entregadoresRepositorio.atualizaEntregadores(id, dto);
  }
}
