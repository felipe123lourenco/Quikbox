import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'entregadores' })
export class EntregadoresEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'cpf', length: 11, nullable: false })
  cpf: string;

  @Column({ name: 'cnh', length: 20, nullable: false })
  cnh: string;

  @Column({ name: 'endereco', length: 1000, nullable: false })
  endereco: string;

  @Column({ name: 'email', length: 150, nullable: false })
  email: string;  

  @Column({ name: 'senha', length: 150, nullable: false })
  senha: string;
}
