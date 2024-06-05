import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntregasEntity } from './entregas.entity';

@Entity({ name: 'entrega_endereco' })
export class EntregaEnderecoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'rua', length: 400, nullable: false })
  rua: string;

  @Column({ name: 'numero', length: 30, nullable: false })
  numero: string;

  @Column({ name: 'complemento', length: 50, nullable: true })
  complemento: string;

  @Column({ name: 'bairro', length: 100, nullable: false })
  bairro: string;

  @Column({ name: 'cidade', length: 100, nullable: false })
  cidade: string;

  @Column({ name: 'estado', length: 100, nullable: false })
  estado: string;

  @Column({ name: 'UF', length: 2, nullable: false })
  UF: string;

  @Column({ name: 'cep', length: 8, nullable: false })
  cep: string;

  @Column({ name: 'latitude', length: 20, nullable: false })
  latitude: string;

  @Column({ name: 'longitude', length: 20, nullable: false })
  longitude: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(() => EntregasEntity, (entregas) => entregas.enderecoEntrega)
  entrega: EntregasEntity;
}
