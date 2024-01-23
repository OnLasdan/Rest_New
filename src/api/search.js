import '../../lib/message.js';
import express from 'express';
import scrape from '../../scrape/index.js';

const apiR = express()
let __path = process.cwd();
const author = 'xyla';

apiR.get('/youtube', async (req, res, next) => {
   const query = req.query.q;
   if (!query) return res.json(msg.paramquery);
   scrape.search.youtube(query)
      .then(data => {
         let result = data;
         if (!result) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author: author,
            data: result
         });
      });
});

apiR.get('/xnxx', async (req, res, next) => {
   const query = req.query.q;
   if (!query) return res.json(msg.paramquery);
   scrape.downloader.download.xnxxSearch(query)
      .then(data => {
         let result = data;
         if (!result) res.json(msg.nodata);
         res.json({
            status: "Success",
            code: 200,
            author: author,
            data: result
         });
      });
});

export default apiR;
