import '../../lib/message.js';
import express from 'express';
import { fetchJson} from '../../lib/function.js';
import mediafire from '../../scrape/index.js';
const author = 'xyla';

const apiR = express();

apiR.get('/tiktok', async (req, res, next) => {
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

apiR.get('/mediafire', async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   mediafire(url)
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
