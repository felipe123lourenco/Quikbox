import { HttpStatus, Injectable } from "@nestjs/common";
import { ClienteRepositorio } from "../repository/cliente_repositorio";
import { AtualizaClienteDTO, CriaClienteDTO } from "../dto/Cliente";
import { CustomLogger } from "src/modulos/logger/custom-logger.service";
import { ClienteEntity } from "../entity/cliente.entity";

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepositorio: ClienteRepositorio,
    private readonly logger: CustomLogger,
  ) {this.logger.setContext('ClienteController');}
  
  async cadastraCliente(data: CriaClienteDTO) {
    const clienteEntity = new ClienteEntity();


    Object.assign(clienteEntity, data as ClienteEntity);

    try {
      await this.clienteRepositorio.salvar(clienteEntity);
      this.logger.logObjeto(HttpStatus.OK, 'Clientes criado', clienteEntity);
    } catch (ex) {
      this.logger.logObjeto(ex.status, ex.message, clienteEntity);
    }
    return clienteEntity;
  }

  async atualizaCliente(id: string, dto: AtualizaClienteDTO) {
    return await this.clienteRepositorio.atualizaCliente(id, dto);
  }

  async deletaCliente(id: string) {
    try {
      await this.clienteRepositorio.deletaCliente(id);
      this.logger.logObjeto(HttpStatus.OK, 'Cliente excluido', id);
      return id;
    } catch (ex) {
      this.logger.error(ex);
    }
  }
  
  async listarCliente(): Promise<ClienteEntity[]> {
    return await this.clienteRepositorio.listarTodos();
  } 

 async listarClienteEmail(email: string): Promise<ClienteEntity | null> {
    return await this.clienteRepositorio.listarClienteEmail(email);
  }
  async validaEmailExistente(email: string): Promise<boolean> {
    return await this.clienteRepositorio.validaEmailExistente(email);
  }

  async validaClientePeloNome(nome: string): Promise<boolean> {
    return await this.clienteRepositorio.validaClientePeloNome(nome);
  }

  async retornaClienteIdPeloNome(nome: string) {
    return await this.clienteRepositorio.retornaClienteIdPeloNome(nome);
  }
}