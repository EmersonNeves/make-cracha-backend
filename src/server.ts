import express from "express";
import cors from 'cors'
import path from "path";
import "express-async-errors";

import "./database/connection";
import routes from "./routes";
import errorHandler from "./errors/handler";

var distDir = __dirname + "/dist/";

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(express.static(distDir));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);
//Rota = conjunto
//Recurso = usuário

app.listen(process.env.PORT || 3333);
