import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregasRepository } from '../repository/entregas_repositorio';
import { EntregasDTO } from '../dto/entregasDTO';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class EntregasService {
  constructor(
    private readonly entregas: EntregasRepository,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregasController');
  }

  async cadastraEntregas(data: EntregasDTO) {
    try {
      const entregasSalva = await this.entregas.salvar(data);
      const mensagem = 'Entrega adicionada com êxito';
      this.logger.logObjeto(HttpStatus.OK, mensagem, entregasSalva);
      return data;
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, data);
    }

    return data;
  }

  async listaEntregas(): Promise<EntregasDTO[]> {
    return (await this.entregas.listarTodos()) as EntregasDTO[];
  }

  async removeEntregas(data: string) {
    return await this.entregas.remover(data);
  }
}
