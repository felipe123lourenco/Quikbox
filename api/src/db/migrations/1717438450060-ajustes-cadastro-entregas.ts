import { MigrationInterface, QueryRunner } from "typeorm";

export class AjustesCadastroEntregas1717438450060 implements MigrationInterface {
    name = 'AjustesCadastroEntregas1717438450060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entrega_endereco" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rua" character varying(400) NOT NULL, "numero" character varying(30) NOT NULL, "complemento" character varying(50), "bairro" character varying(100) NOT NULL, "cidade" character varying(100) NOT NULL, "estado" character varying(100) NOT NULL, "cep" character varying(8) NOT NULL, "latitude" character varying(20) NOT NULL, "longitude" character varying(20) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "entregaId" uuid, CONSTRAINT "PK_d1b1b912fb172395290a0f72329" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "geolocalizacao" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "deleted_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entrega_endereco" ADD CONSTRAINT "FK_b89e8394f1b37808ffb9ab1be97" FOREIGN KEY ("entregaId") REFERENCES "entregas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entrega_endereco" DROP CONSTRAINT "FK_b89e8394f1b37808ffb9ab1be97"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "status" character varying(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "entregas" DROP COLUMN "geolocalizacao"`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "longitude" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "latitude" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ADD "endereco" character varying(1000) NOT NULL`);
        await queryRunner.query(`DROP TABLE "entrega_endereco"`);
    }

}
