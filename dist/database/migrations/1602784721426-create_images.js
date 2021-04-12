"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImages1602784721426 = void 0;
const typeorm_1 = require("typeorm");
class createImages1602784721426 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "images",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "path",
                    type: "varchar",
                },
                {
                    name: 'user_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: "ImageUser",
                    columnNames: ["user_id"],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('images');
    }
}
exports.createImages1602784721426 = createImages1602784721426;
