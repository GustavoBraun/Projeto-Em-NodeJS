import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1713206594934 implements MigrationInterface {
    name = 'Default1713206594934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ALTER COLUMN "description" SET NOT NULL`);
    }

}
