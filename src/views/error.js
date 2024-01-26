import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const R404 = express();

R404.set("view engine", "ejs");
R404.set("views", join(__dirname, "..", "views"));

R404.use((req, res) => {
  res.render("pages/ERROR/404");
});

export default R404;
