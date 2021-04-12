"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Images_view_1 = __importDefault(require("./Images.view"));
exports.default = {
    render(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            occupation: user.occupation,
            images: Images_view_1.default.renderMany(user.images),
        };
    },
    renderMany(users) {
        return users.map(user => this.render(user));
    }
};
