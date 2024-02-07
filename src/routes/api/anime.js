import msg from '../../lib/message.js';
import express from 'express';
import {
  doujindesusearch,
  doujindesuch,
  doujindesulatest,hentai
 } from '../../scrape/src/downloader/downloader.js';
 import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import traceMoe from '../../scrape/src/anime/whatAnime.js';
const author = 'xyla';

const apiR = express.Router();

apiR.get('/doujin-search', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.q;
   if (!url) return res.json(msg.paramurl);
   doujindesusearch(url)
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author,
            data
         });
      });
});

apiR.get('/doujin-ch', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   doujindesuch(url)
      .then(data => {
        console.log(data)
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author,
            data
         });
      });
});

apiR.get('/doujin-latest', apiKeyMiddleware, async (req, res, next) => {
   doujindesulatest()
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author,
            data
         });
      });
});

apiR.get('/hentai', apiKeyMiddleware, async (req, res, next) => {
   hentai()
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author,
            data
         });
      });
});

apiR.get('/whatanime', apiKeyMiddleware, async (req, res) => {
  const url = req.query.url;

  try {
    if (!url) {
      return res.status(400).json({ error: 'Invalid parameters. URL is required.' });
    }

    const data = await traceMoe(url);
    res.json({
        status: "Success",
        code: 200,
        author,
        data
     });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});
export default apiR;
