import { MigrationInterface, QueryRunner } from "typeorm";

export class AjustesNullableCadastroEntrega1717617380980 implements MigrationInterface {
    name = 'AjustesNullableCadastroEntrega1717617380980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_confirmacao" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_coleta" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_coleta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entregas" ALTER COLUMN "codigo_confirmacao" SET NOT NULL`);
    }

}
