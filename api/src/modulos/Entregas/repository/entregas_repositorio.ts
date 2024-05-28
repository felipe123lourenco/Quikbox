import { Injectable, NotFoundException } from '@nestjs/common';
import { EntregasEntity } from '../entity/entregas.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtualizaEntregasDTO } from '../dto/entregasDTO';

@Injectable()
export class EntregasRepositorio {
  constructor(
    @InjectRepository(EntregasEntity)
    private readonly entregasRepository: Repository<EntregasEntity>,
  ) {}

  async salvar(novoEntregas: EntregasEntity) {
    await this.entregasRepository.save(novoEntregas);
  }

  async listarTodos() {
    return await this.entregasRepository.find();
  }

  async listarEntregas(id: string) {
    const cliente = await this.entregasRepository.find({
      where: { id: id },
      relations: { entregas: true },
    });

    if (entregas === null) {
      new NotFoundException('Entrega não localizado');
    }

    return entregas;
  }

  async deletaEntregas(id: string) {
    const deletou = await this.entregasRepository.delete(id);
    if (!deletou.affected) {
      throw new NotFoundException('Entrega não encontrada');
    }
  }

  async atualizaEntregas(id: string, dto: AtualizaEntregasDTO) {
    const entregas = await this.entregasRepository.findOneBy({ id });
    if (entregas === null) {
      throw new NotFoundException('Entrega não encontrado');
    }
    Object.assign(entregas, dto as EntregasEntity);

    return this.entregasRepository.save(entregas);
  }

  async validaEmailExistente(email: string): Promise<boolean> {
    const emailLocalizado = await this.entregasRepository.findOne({
      where: { email },
    });
    return !!emailLocalizado;
  }

  async validaEntregasPeloNome(nome: string): Promise<boolean> {
    const nomeLocalizado = await this.entregasRepository
      .createQueryBuilder('autor')
      .where('UPPER(autor.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    return !!nomeLocalizado;
  }

  async retornaEntregasIdPeloNome(nome: string) {
    const nomeLocalizado = await this.entregasRepository
      .createQueryBuilder('cliente')
      .where('UPPER(autor.nome) = UPPER(:nome)', { nome: nome.toUpperCase() })
      .getOne();

    if (nomeLocalizado === null) {
      throw new NotFoundException('Entrega não localizada');
    }

    return nomeLocalizado.id;
  }
}
