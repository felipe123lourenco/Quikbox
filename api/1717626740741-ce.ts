import { MigrationInterface, QueryRunner } from "typeorm";

export class Ce1717626740741 implements MigrationInterface {
    name = 'Ce1717626740741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "id_entrega" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "cliente_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "entregador_id" character varying`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "logradouro" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "numero" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "complemento" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "bairro" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "cidade" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "estado" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "cep" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "senha" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "latitude" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "longitude" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_confirmacao" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_coleta" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_coleta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_confirmacao" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "status" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "longitude" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "latitude" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "logradouro"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "entregador_id"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "cliente_id"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "id_entrega"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "endereco" character varying(1000) NOT NULL`);
    }

}
