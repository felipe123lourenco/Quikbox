import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntregaEnderecoEntity } from './entrega-endereco.entity';
import { StatusEntrega } from '../../../recursos/enums/status-entrega.enum';

@Entity({ name: 'entregas' })
export class EntregasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'id_entrega', length: 8, nullable: false })
  idEntrega: string;

  @Column({ name: 'geolocalizacao', length: 100, nullable: false })
  geolocalizacao: string;

  @Column({ name: 'largura', nullable: false })
  largura: number;

  @Column({ name: 'altura', nullable: false })
  altura: number;

  @Column({ name: 'peso', nullable: false })
  peso: number;

  @Column({ name: 'status', enum: StatusEntrega, nullable: false })
  status: StatusEntrega;

  @Column({ name: 'codigo_confirmacao', length: 150, nullable: false })
  codigoConfirmacao: string;

  @Column({ name: 'codigo_coleta', length: 150, nullable: false })
  codigoColeta: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @OneToOne(
    () => EntregaEnderecoEntity,
    (entregaEndereco) => entregaEndereco.entrega,
    { cascade: true },
  )
  enderecoEntrega: EntregaEnderecoEntity;
}
