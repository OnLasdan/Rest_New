import express from 'express'
import { fetchJson } from '../../lib/function.js'
import {
  mediafires,
  facebook,
  xnxxDownloader,
} from '../../scrape/src/downloader/downloader.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
const author = 'xyla'

const apiR = express.Router()

apiR.get('/:source', apiKeyMiddleware, async (req, res, next) => {
  const url = req.query.url;
  if (!url) return res.json(global.msg.paramurl);

  let data;
  const source = req.params.source.toLowerCase();

  switch (source) {
    case 'tiktok':
      data = await fetchJson(
        `https://xorizn-downloads.vercel.app/api/downloads/tiktok?url=${url}`
      );
      break;
    case 'mediafire':
      data = await mediafires(url);
      break;
    case 'facebook':
      data = await facebook(url);
      break;
    case 'xnxx':
      data = await xnxxDownloader(url);
      break;
    default:
      return res.json(global.msg.invalidsource);
  }

  if (!data) return res.json(global.msg.nodata);

  res.status(200).json({
    status: 'Success',
    code: 200,
    author: 'Xyla',
    data,
  });
});


export default apiR
