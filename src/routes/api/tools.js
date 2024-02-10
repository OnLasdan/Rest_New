import express from "express";
import { translate, langList } from "../../scrape/src/tools/translate.js";
import { cekGambar } from "../../scrape/src/tools/antiPorn.js";
import apiKeyMiddleware from "../../middlewares/apiKeyMiddleware.js";
const author = "xyla";
const apiR = express.Router();

apiR.get("/translate", apiKeyMiddleware, async (req, res) => {
  try {
    const { lang, text } = req.query;

    if (!lang || !text) {
      return res
        .status(400)
        .json({
          error: "Invalid parameters. Both lang and text are required.",
        });
    }

    const data = await translate(lang, text);
    res.json({
      status: "Success",
      code: 200,
      author,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

apiR.get("/langList", apiKeyMiddleware, async (req, res) => {
  try {
    const languages = await langList();
    res.json({ languages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

apiR.get("/anti-porn", apiKeyMiddleware, async (req, res) => {
  const imgUrl = req.query.url;

  try {
    if (!imgUrl) {
      return res.status(400).json({ error: "Parameter url tidak ditemukan" });
    }

    const data = await cekGambar(imgUrl);
    res.json({
      status: "Success",
      code: 200,
      author,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan dalam server" });
  }
});

export default apiR;
