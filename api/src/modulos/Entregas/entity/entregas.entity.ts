import { EntregasEntity } from '../../Entregas/entity/Entregas';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ nome: 'entregas' })
export class EntregasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'endereco', length: 1000, nullable: false })
  endereco: string;

  @Column({ name: 'geolocalizacao', length: 100, nullable: false })
  geolocalizacao: string;

  @Column({ name: 'dimensoes', length: 1000, nullable: false })
  dimensoes: number;

  @Column({ name: 'peso', length: 150, nullable: false })
  peso: number;

  @Column({ name: 'status', length: 150, nullable: false })
  status: string;

  @Column({ name: 'codigo_confirmacao', length: 150, nullable: false })
  codigo_confirmacao: string;

  @Column({ name: 'codigo_coleta', length: 150, nullable: false })
  codigo_coleta: string;

  @OneToMany(() => EntregasEntity, (entregas) => entregas.id {
    cascade: true,
    eager: true,
  })

  entregas: EntregasEntity[];
}
