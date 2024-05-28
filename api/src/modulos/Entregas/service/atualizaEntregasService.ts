import { Injectable } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';
import { AtualizaEntregasDTO } from '../dto/entregasDTO';

@Injectable()
export class AtualizaEntregasService {
  constructor(private readonly entregasRepositorio: EntregasRepositorio) {}

  async atualizaCliente(id: string, dto: AtualizaEntregasDTO) {
    return await this.entregasRepositorio.atualizaEntregas(id, dto);
  }
}
