"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Yup = __importStar(require("yup"));
const typeorm_1 = require("typeorm");
const Users_view_1 = __importDefault(require("../views/Users.view"));
const User_1 = __importDefault(require("../models/User"));
exports.default = {
    async create(request, response) {
        const { firstName, lastName, occupation } = request.body;
        const usersRepository = typeorm_1.getRepository(User_1.default);
        const requestImages = request.files;
        const images = requestImages.map((image) => {
            return { path: image.filename };
        });
        const data = {
            firstName,
            lastName,
            occupation,
            images,
        };
        const schema = Yup.object().shape({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            occupation: Yup.string().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const user = usersRepository.create(data);
        await usersRepository.save(user);
        return response.status(201).json(user);
    },
    async index(request, response) {
        const usersRepository = typeorm_1.getRepository(User_1.default);
        const users = await usersRepository.find({
            relations: ["images"],
        });
        return response.json(Users_view_1.default.renderMany(users));
    },
    async show(request, response) {
        const { id } = request.params;
        const usersRepository = typeorm_1.getRepository(User_1.default);
        const user = await usersRepository.findOneOrFail(id, {
            relations: ["images"],
        });
        return response.json(Users_view_1.default.render(user));
    },
};
