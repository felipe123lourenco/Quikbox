import { MigrationInterface, QueryRunner } from "typeorm";

export class Qb1717255310888 implements MigrationInterface {
    name = 'Qb1717255310888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entregadores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "cpf" character varying(11) NOT NULL, "cnh" character varying(20) NOT NULL, "endereco" character varying(1000) NOT NULL, "email" character varying(150) NOT NULL, "senha" character varying(150) NOT NULL, CONSTRAINT "PK_812545842bfa52f5dae0d9f7ac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entregas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "endereco" character varying(1000) NOT NULL, "latitude" character varying(1000) NOT NULL, "longitude" character varying(1000) NOT NULL, "altura" integer NOT NULL, "largura" integer NOT NULL, "peso" integer NOT NULL, "status" character varying(150) NOT NULL, "codigo_confirmacao" character varying(150) NOT NULL, "codigo_coleta" character varying(150) NOT NULL, CONSTRAINT "PK_b0bdf868c69c227aefd59085282" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "cnpj" character varying(14) NOT NULL, "endereco" character varying(1000) NOT NULL, "latitude" character varying(1000) NOT NULL, "longitude" character varying(1000) NOT NULL, "email" character varying(150) NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "entregas"`);
        await queryRunner.query(`DROP TABLE "entregadores"`);
    }

}
