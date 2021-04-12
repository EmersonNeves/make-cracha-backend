"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const uploads_1 = __importDefault(require("./config/uploads"));
const User_controllers_1 = __importDefault(require("./controllers/User.controllers"));
const routes = express_1.Router();
const upload = multer_1.default(uploads_1.default);
routes.post("/users", upload.array('images'), User_controllers_1.default.create);
routes.get("/users", User_controllers_1.default.index);
exports.default = routes;
