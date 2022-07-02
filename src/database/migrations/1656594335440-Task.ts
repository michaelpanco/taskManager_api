import { MigrationInterface, QueryRunner } from 'typeorm';

export class Task1656594335440 implements MigrationInterface {
    name = 'Task1656594335440';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`tasks\` (\`id\` varchar(36) NOT NULL, \`note\` text NOT NULL, \`dateTime\` text NOT NULL, \`accountId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
        await queryRunner.query(
            `ALTER TABLE \`tasks\` ADD CONSTRAINT \`FK_d0a1ad33ba08146aa395e629113\` FOREIGN KEY (\`accountId\`) REFERENCES \`accounts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`tasks\` DROP FOREIGN KEY \`FK_d0a1ad33ba08146aa395e629113\``
        );
    }
}
