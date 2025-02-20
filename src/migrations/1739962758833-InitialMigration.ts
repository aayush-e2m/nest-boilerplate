import countriesJSON from '@/static/counties.json';
import rolesJSON from '@/static/roles.json';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1739962758833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const role of rolesJSON) {
      await queryRunner.query(
        `INSERT INTO roles (id, code, name, permissions) VALUES (gen_random_uuid(), $1, $2, $3)`,
        [role.code, role.name, role.permissions],
      );
    }

    for (const country of countriesJSON) {
      await queryRunner.query(
        `INSERT INTO countries (id, name, phonecode, sortname) VALUES (gen_random_uuid(), $1, $2, $3)`,
        [country.name, country.phonecode, country.sortname],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM roles WHERE code IN (${rolesJSON.map((r) => `'${r.code}'`).join(', ')});
    `);
    await queryRunner.query(`
      DELETE FROM countries;
    `);
  }
}
