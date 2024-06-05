import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'clientes' })
export class ClienteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'cnpj', length: 14, nullable: false })
  cnpj: string;

  @Column({ name: 'endereco', length: 1000, nullable: false })
  endereco: string;

  @Column({ name: 'latitude', length: 1000, nullable: false })
  latitude: string;

  @Column({ name: 'longitude', length: 1000, nullable: false })
  longitude: string;

  @Column({ name: 'email', length: 150, nullable: false })
  email: string;

  @Column({ name: 'senha', length: 150, nullable: false })
  senha: string;
}
