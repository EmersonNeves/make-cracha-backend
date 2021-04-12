"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1609935611572 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1609935611572 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
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
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "occupation",
                    type: "varchar",
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.createUsers1609935611572 = createUsers1609935611572;
