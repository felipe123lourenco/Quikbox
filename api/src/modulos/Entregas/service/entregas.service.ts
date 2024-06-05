import { InjectRepository } from '@nestjs/typeorm';
import { EntregasEntity } from '../entity/entregas.entity';
import { Repository } from 'typeorm';
import { CriaEntregasDTO } from '../dto/CriaEntregas.dto';
import { StatusEntrega } from 'src/recursos/enums/status-entrega.enum';
import { ufValida } from 'src/recursos/utils';
import { HttpException, HttpStatus } from '@nestjs/common';
import { randomBytes } from 'crypto';

export class EntregasService {
  constructor(
    @InjectRepository(EntregasEntity)
    private readonly entregasRepository: Repository<EntregasEntity>,
  ) { }

  private contadorEntregas: number = 0;

  private async salvar(novoEntregasEntity: EntregasEntity) {
    await this.entregasRepository.save(novoEntregasEntity);
  }

  private async buscarPorId(id: string): Promise<EntregasEntity> {
    const existeEntrega = await this.entregasRepository.findOneBy({ id });
    if (!existeEntrega) {
      throw new Error('Entrega não existe');
    }

    return existeEntrega;
  }

  async listarEntregas(): Promise<EntregasEntity[]> {
    return await this.entregasRepository.find();
  }

  async buscarEntregaPorId(id: string): Promise<EntregasEntity> {
    return await this.buscarPorId(id);
  }

  async cadastraEntregas(data: CriaEntregasDTO): Promise<EntregasEntity> {
    const idEntrega = await this.gerarCodigoEntrega(data.estado);
    const novoEntregasEntity = new EntregasEntity();

    novoEntregasEntity.idEntrega = idEntrega;
    novoEntregasEntity.clienteId = data.clienteId;
    novoEntregasEntity.latitude = data.latitude;
    novoEntregasEntity.longitude = data.longitude;
    novoEntregasEntity.logradouro = data.logradouro;
    novoEntregasEntity.numero = data.numero;
    novoEntregasEntity.complemento = data.complemento;
    novoEntregasEntity.bairro = data.bairro;
    novoEntregasEntity.cidade = data.cidade;
    novoEntregasEntity.estado = data.estado;
    novoEntregasEntity.cep = data.cep;
    novoEntregasEntity.largura = data.largura;
    novoEntregasEntity.altura = data.altura;
    novoEntregasEntity.peso = data.peso;
    novoEntregasEntity.status = StatusEntrega.PENDENTE;

    this.salvar(novoEntregasEntity);

    return novoEntregasEntity;
  }

  async atualizaEntregas(
    id: string,
    dadosEntrega: Partial<EntregasEntity>,
  ): Promise<EntregasEntity> {
    const dadosNaoAlteraveis = ['id', 'createdAt', 'updatedAt', 'deletedAt'];
    const entrega = await this.buscarPorId(id);
    Object.entries(dadosEntrega).forEach(([chave, valor]) => {
      if (!dadosNaoAlteraveis.includes(chave)) {
        entrega[chave] = valor;
      }
    });
    await this.salvar(entrega);
    return entrega;
  }

  async deletaEntregas(id: string) {
    return await this.entregasRepository.delete(id);
  }

  async gerarCodigoEntrega(uf: string): Promise<string> {
    const isValidUf = ufValida(uf);
    if (!isValidUf) {
      throw new HttpException('UF inválida', HttpStatus.BAD_REQUEST);
    }
    this.contadorEntregas = await this.entregasRepository.count();
    this.contadorEntregas = this.contadorEntregas + 1;
    const padCount = 6 - String(this.contadorEntregas).length;
    const codigoEntrega = `${uf}${String(this.contadorEntregas).padStart(padCount, '0')}`;
    return codigoEntrega;
  }

  async gerarCodigoColeta(): Promise<string> {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let codigo = '';

    for (let i = 0; i < 3; i++) {
      const indiceLetra = randomBytes(1)[0] % letras.length;
      codigo += letras[indiceLetra];
    }

    for (let i = 0; i < 3; i++) {
      const indiceNumero = randomBytes(1)[0] % numeros.length;
      codigo += numeros[indiceNumero];
    }

    return codigo;
  }
}
