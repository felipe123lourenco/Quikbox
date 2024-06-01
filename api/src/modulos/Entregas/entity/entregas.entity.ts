import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'entregas' })
export class EntregasEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'endereco', length: 1000, nullable: false })
  endereco: string;

  @Column({ name: 'latitude', length: 1000, nullable: false })
  latitude: string;

  @Column({ name: 'longitude', length: 1000, nullable: false })
  longitude: string;

  @Column({ name: 'altura', nullable: false })
  altura: number;
  
  @Column({ name: 'largura', nullable: false })
  largura: number;

  @Column({ name: 'peso', nullable: false })
  peso: number;

  @Column({ name: 'status', length: 150, nullable: false })
  status: string;

  @Column({ name: 'codigo_confirmacao', length: 150, nullable: false })
  codigo_confirmacao: string;

  @Column({ name: 'codigo_coleta', length: 150, nullable: false })
  codigo_coleta: string;

}
