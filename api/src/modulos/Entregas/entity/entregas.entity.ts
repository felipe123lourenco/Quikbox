import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusEntrega } from '../../../recursos/enums/status-entrega.enum';

@Entity({ name: 'entregas' })
export class EntregasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'id_entrega', length: 8, nullable: false })
  idEntrega: string;

  @Column({ name: 'cliente_id', nullable: false })
  clienteId: string;

  @Column({ name: 'entregador_id', nullable: true })
  entregadorId: string;

  @Column({ name: 'latitude', length: 20 })
  latitude: string;

  @Column({ name: 'longitude', length: 20 })
  longitude: string;

  @Column({ name: 'logradouro', length: 200, nullable: false })
  logradouro: string;

  @Column({ name: 'numero', length: 20, nullable: false })
  numero: string;

  @Column({ name: 'complemento', length: 50, nullable: false })
  complemento: string;

  @Column({ name: 'bairro', length: 100, nullable: false })
  bairro: string;

  @Column({ name: 'cidade', length: 100, nullable: false })
  cidade: string;

  @Column({ name: 'estado', length: 2, nullable: false })
  estado: string;

  @Column({ name: 'cep', length: 8, nullable: false })
  cep: string;

  @Column({ name: 'largura', nullable: false })
  largura: number;

  @Column({ name: 'altura', nullable: false })
  altura: number;

  @Column({ name: 'peso', nullable: false })
  peso: number;

  @Column({ name: 'status', enum: StatusEntrega, nullable: false })
  status: StatusEntrega;

  @Column({ name: 'codigo_confirmacao', length: 150, nullable: true })
  codigoConfirmacao: string;

  @Column({ name: 'codigo_coleta', length: 150, nullable: true })
  codigoColeta: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}
