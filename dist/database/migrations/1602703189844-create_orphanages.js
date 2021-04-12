"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrphanages1602703189844 = void 0;
const typeorm_1 = require("typeorm");
class createOrphanages1602703189844 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "orphanages",
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
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "about",
                    type: "text",
                },
                {
                    name: "instructions",
                    type: "text",
                },
                {
                    name: "openning_hours",
                    type: "varchar",
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("orphanages");
    }
}
exports.createOrphanages1602703189844 = createOrphanages1602703189844;
