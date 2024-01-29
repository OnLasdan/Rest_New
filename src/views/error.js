import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const R404 = express();

R404.use((req, res) => {
  res.status(404).render("pages/ERROR/404");
});
export default R404;
