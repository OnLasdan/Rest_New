import msg from '../../lib/message.js';
import express from 'express';
import { fetchJson} from '../../lib/function.js';
import {
  mediafires,
  facebook,
  xnxxDownloader
 } from '../../scrape/src/downloader/downloader.js';
 import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
const author = 'xyla';

const apiR = express.Router();

apiR.get('/tiktok', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   const xorizn = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/tiktok?url=${url}`);
   if (!xorizn.result) return res.json(msg.nodata);
   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: xorizn.result
   });
});

apiR.get('/mediafire', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   mediafires(url)
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author: author,
            data: data
         });
      });
});

apiR.get('/facebook', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   facebook(url)
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author: author,
            data: data
         });
      });
});

apiR.get('/xnxx', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   xnxxDownloader(url)
      .then(data => {
         if (!data) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author: author,
            data: data
         });
      });
});


export default apiR;
