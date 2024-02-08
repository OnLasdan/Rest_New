// app.js
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import bodyParser from "body-parser";
import favicon from "serve-favicon";
import path from "path";
import dotenv from "dotenv";
import compression from "compression";
import session from "express-session";
import helmet from "helmet";
import { createRequire } from "module";
import helloRouter from "./views/home.js";
import R404 from "./views/error.js";
import apiR from "./routes/api/router.js";
import resetLimitsCron from "./lib/resetLimitsCron.js";
import options2 from "./lib/options.js";
import verifyRoutes from "./routes/verifyRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import routerDocs from "./routes/routerDocs.js";
import { swaggerWr, customLogger } from "./lib/function.js";
import chalk from "chalk";
 const currentDirectory = path.dirname(new URL(import.meta.url).pathname);
const app = express();
dotenv.config();
resetLimitsCron();
if (process.env.NODE_ENV === "development") {
  await swaggerWr();
  app.use(customLogger);
}
const require = createRequire(import.meta.url);
const options = await options2();
const swaggerModule = require("./lib/swagger.json");

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "uh58h5yj8",
  }),
);
app.set("trust proxy", 1);
app.use(compression());
app.use(favicon(path.join(currentDirectory, "assets", "image", "2.png")));
app.use("/assets", express.static(path.join(currentDirectory, "assets")));
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routerDocs);
app.use(helmet());
app.use("/", helloRouter, verifyRoutes, apiR, authRoutes);
app.use(R404);

export default app;
