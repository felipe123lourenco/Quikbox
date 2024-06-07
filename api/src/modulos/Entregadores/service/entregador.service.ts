import { HttpStatus, Injectable } from "@nestjs/common";
import { EntregadoresRepositorio } from "../repository/entregadores_repositorio";
import { AtualizaEntregadoresDTO, CriaEntregadoresDTO } from "../dto/Entregadores";
import { CustomLogger } from "src/modulos/logger/custom-logger.service";
import { EntregadoresEntity } from "../entity/entregadores.entity";

@Injectable()
export class EntregadorService {
  constructor(private readonly entregadoresRepositorio: EntregadoresRepositorio,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('EntregadoresController');
  }

  async atualizaEntregadores(id: string, dto: AtualizaEntregadoresDTO) {
    return await this.entregadoresRepositorio.atualizaEntregadores(id, dto);
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

  async deletaCliente(id: string) {
    try {
      await this.entregadoresRepositorio.deletaEntregadores(id);
      this.logger.logObjeto(HttpStatus.OK, 'Entregador excluido', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
  
  async listarEntregadores(): Promise<EntregadoresEntity[]> {
    return await this.entregadoresRepositorio.listarTodos();
  } 

  async listarEntregadoresEmail(email: string): Promise<EntregadoresEntity | null> {
    return await this.entregadoresRepositorio.listarEntregadoresEmail(email);
  } 
  async validaEmailExistente(email: string): Promise<boolean> {
    return await this.entregadoresRepositorio.validaEmailExistente(email);
  }

  async validaEntregadoresPeloNome(nome: string): Promise<boolean> {
    return await this.entregadoresRepositorio.validaEntregadoresPeloNome(nome);
  }

  async retornaEntregadoresIdPeloNome(nome: string) {
    return await this.entregadoresRepositorio.retornaEntregadoresIdPeloNome(nome);
  }
}