import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CatRefactoting1558169572403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.addColumn(
      'cat',
      new TableColumn({
        name: 'createdDate',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      }),
    );

    queryRunner.addColumn(
      'cat',
      new TableColumn({
        name: 'updatedDate',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.dropColumn('cat', 'createdDate');
    queryRunner.dropColumn('cat', 'updatedDate');
  }
}
