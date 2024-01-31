import '../../lib/message.js';
import express from 'express';
import scrape from '../../scrape/index.js';
import { xnxxSearch } from '../../scrape/src/downloader/downloader.js';
import youtube from '../../scrape/src/search/youtube.js';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
const apiR = express();
let __path = process.cwd();
const author = 'xyla';

apiR.get('/youtube', apiKeyMiddleware, async (req, res, next) => {
   const query = req.query.q;
   if (!query) return res.json(msg.paramquery);
   try {
      const data = await youtube(query);
      let result = data;
      if (!result) res.json(msg.nodata);
      res.json({
         status: "Success",
         code: 200,
         author: author,
         data: result
      });
   } catch (e) {
      next(e);
   }
});

apiR.get('/xnxx', apiKeyMiddleware, async (req, res, next) => {
   const query = req.query.q;
   if (!query) return res.json(msg.paramquery);
   try {
      const data = await xnxxSearch(query);
      if (!data) return res.json(msg.nodata);
      res.json({
         status: "Success",
         code: 200,
         author: author,
         data: data
      });
   } catch (error) {
      next(error);
   }
});

export default apiR;