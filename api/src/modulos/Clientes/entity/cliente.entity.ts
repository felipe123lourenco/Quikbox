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

  @Column({ name: 'cnpj', length: 100, nullable: false })
  cnpj: number;

  @Column({ name: 'endereco', length: 1000, nullable: false })
  endereco: string;

  @Column({ name: 'coordenadas', length: 1000, nullable: false })
  coordenadas: string;

  @Column({ name: 'email', length: 150, nullable: false })
  email: string;


}
