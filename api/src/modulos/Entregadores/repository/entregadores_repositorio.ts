import { Injectable, NotFoundException } from '@nestjs/common';
import { EntregadoresEntity } from '../entity/entregadores.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtualizaEntregadoresDTO } from '../dto/Entregadores';

@Injectable()
export class EntregadoresRepositorio {
  constructor(
    @InjectRepository(EntregadoresEntity)
    private readonly entregadoresRepository: Repository<EntregadoresEntity>,
  ) {}

  async salvar(novoEntregadores: EntregadoresEntity) {
    await this.entregadoresRepository.save(novoEntregadores);
  }

  async listarTodos() {
    return await this.entregadoresRepository.find();
  }

  async listarEntregadores(id: string) {
    const entregadores = await this.entregadoresRepository.find({
      where: { id: id },
      relations: { entregadores: true },
    });

    if (entregadores === null) {
      new NotFoundException('Entregador não localizado');
    }

    return entregadores;
  }

  async deletaEntregadores(id: string) {
    const deletou = await this.entregadoresRepository.delete(id);
    if (!deletou.affected) {
      throw new NotFoundException('Entregador não encontrado');
    }
  }

  async atualizaEntregadores(id: string, dto: AtualizaEntregadoresDTO) {
    const entregadores = await this.entregadoresRepository.findOneBy({ id });
    if (entregadores === null) {
      throw new NotFoundException('Entregador não encontrado');
    }
    Object.assign(entregadores, dto as EntregadoresEntity);

    return this.entregadoresRepository.save(entregadores);
  }

  async validaEmailExistente(email: string): Promise<boolean> {
    const emailLocalizado = await this.entregadoresRepository.findOne({
      where: { email },
    });
    return !!emailLocalizado;
  }

  async validaEntregadoresPeloNome(nome: string): Promise<boolean> {
    const nomeLocalizado = await this.entregadoresRepository
      .createQueryBuilder('entregadores')
      .where('UPPER(entregadores.nome) = UPPER(:entregadores)', { nome: nome.toUpperCase() })
      .getOne();

    return !!nomeLocalizado;
  }

  async retornaEntregadoresIdPeloNome(nome: string) {
    const nomeLocalizado = await this.entregadoresRepository
      .createQueryBuilder('cliente')
      .where('UPPER(entregadores.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    if (nomeLocalizado === null) {
      throw new NotFoundException('Entregador não localizado');
    }

    return nomeLocalizado.id;
  }
}
