import swaggerJsDoc from 'swagger-jsdoc'
import express from "express";
import swaggerUI from "swagger-ui-express";
import options2 from "../lib/options.js";
import { createRequire } from "module"
const routerDocs = express.Router();
const options = await options2();
const options3 = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "https://nodejs-swagger-api.vercel.app/",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["**/**/*.yaml"],
};

const specs = swaggerJsDoc(options3);
const CSS_URL =
"https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"
routerDocs.use("/vercelDocs", swaggerUI.serve, swaggerUI.setup(specs, {
customCssUrl: CSS_URL }));

// 
// const require = createRequire(import.meta.url);
// const swaggerModule = require("../lib/swagger.json");

// routerDocs.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerModule, options));

export default routerDocs;
