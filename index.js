import express from "express";
import * as route from "./src/route/productRoute.js";

const app = express();

app.use(express.json());

app.use(route.router);

app.listen(8000);
