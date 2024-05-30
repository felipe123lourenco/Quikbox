import { HttpStatus, Injectable } from '@nestjs/common';
import { EntregasRepositorio } from '../repository/entregas_repositorio';
import { CriaEntregasDTO } from '../dto/entregasDTO';
import { CustomLogger } from 'src/modulos/logger/custom-logger.service';

@Injectable()
export class EntregasService {
  constructor(
    private readonly entregas: EntregasRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregasController');
  }

  async cadastraEntregas(data: CriaEntregasDTO) {
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

  async listaEntregas(): Promise<CriaEntregasDTO[]> {
    return (await this.entregas.listarTodos()) as CriaEntregasDTO[];
  }

  async removeEntregas(data: string) {
    return await this.removeEntregas(data);
  }
}
