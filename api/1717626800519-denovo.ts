import { MigrationInterface, QueryRunner } from "typeorm";

export class Denovo1717626800519 implements MigrationInterface {
    name = 'Denovo1717626800519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entregas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "id_entrega" character varying(8) NOT NULL, "cliente_id" character varying NOT NULL, "entregador_id" character varying, "latitude" character varying(20) NOT NULL, "longitude" character varying(20) NOT NULL, "logradouro" character varying(200) NOT NULL, "numero" character varying(20) NOT NULL, "complemento" character varying(50) NOT NULL, "bairro" character varying(100) NOT NULL, "cidade" character varying(100) NOT NULL, "estado" character varying(2) NOT NULL, "cep" character varying(8) NOT NULL, "largura" integer NOT NULL, "altura" integer NOT NULL, "peso" integer NOT NULL, "status" character varying NOT NULL, "codigo_confirmacao" character varying(150), "codigo_coleta" character varying(150), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b0bdf868c69c227aefd59085282" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "cnpj" character varying(14) NOT NULL, "endereco" character varying(1000) NOT NULL, "latitude" character varying(1000) NOT NULL, "longitude" character varying(1000) NOT NULL, "email" character varying(150) NOT NULL, "senha" character varying(150) NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entregadores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "cpf" character varying(11) NOT NULL, "cnh" character varying(20) NOT NULL, "endereco" character varying(1000) NOT NULL, "email" character varying(150) NOT NULL, "senha" character varying(150) NOT NULL, CONSTRAINT "PK_812545842bfa52f5dae0d9f7ac1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "entregadores"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "entregas"`);
    }

}
