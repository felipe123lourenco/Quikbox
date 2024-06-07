import { Injectable, NotFoundException } from '@nestjs/common';
import { ClienteEntity } from '../entity/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtualizaClienteDTO, CriaClienteDTO } from '../dto/Cliente';

@Injectable()
export class ClienteRepositorio {
  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteRepository: Repository<ClienteEntity>,
  ) {}

  async salvar(cliente: CriaClienteDTO) {
    await this.clienteRepository.save(cliente);
  }

  async listarTodos() {
    return await this.clienteRepository.find();
  }

  async listarCliente(id: string) {
    const cliente = await this.clienteRepository.find({
      where: { id: id }
    });

    if (cliente === null) {
      new NotFoundException('Cliente não localizado');
    }

    return cliente;
  }

  async deletaCliente(id: string) {
    const deletou = await this.clienteRepository.delete(id);
    if (!deletou.affected) {
      throw new NotFoundException('Cliente não encontrado');
    }
  }

  async atualizaCliente(id: string, dto: AtualizaClienteDTO) {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (cliente === null) {
      throw new NotFoundException('Cliente não encontrado');
    }
    Object.assign(cliente, dto as ClienteEntity);

    return this.clienteRepository.save(cliente);
  }

  async validaEmailExistente(email: string): Promise<boolean> {
    const emailLocalizado = await this.clienteRepository.findOne({
      where: { email },
    });
    return !!emailLocalizado;
  }

  async validaClientePeloNome(nome: string): Promise<boolean> {
    const nomeLocalizado = await this.clienteRepository
      .createQueryBuilder('cliente')
      .where('UPPER(cliente.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    return !!nomeLocalizado;
  }

  async retornaClienteIdPeloNome(nome: string) {
    const nomeLocalizado = await this.clienteRepository
      .createQueryBuilder('cliente')
      .where('UPPER(cliente.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    if (nomeLocalizado === null) {
      throw new NotFoundException('Cliente não localizado');
    }

    return nomeLocalizado.id;
  }

  async listarClienteEmail(email: string) {
    return await this.clienteRepository.findOne({
      where: { email },
    });
  }
}
