import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/uploads';
import UserControllers from "./controllers/User.controllers";

import OrphanageControllers from "./controllers/User.controllers";

const routes = Router();
const upload = multer(uploadConfig);
routes.post("/users", upload.array('images'), UserControllers.create);
routes.get("/users", UserControllers.index);
export default routes;
