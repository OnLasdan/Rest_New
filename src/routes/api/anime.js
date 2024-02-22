
import express from 'express';
import scrape from '../../scrape/index.js';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import traceMoe from '../../scrape/src/anime/whatAnime.js';

const apiRouter = express.Router();

const handlers = {
  'doujin-search': {
    handler: scrape.komik.doujindesusearch,
    requiredParam: 'url',
  },
  'doujin-ch': {
    handler: scrape.downloader.doujindesuch,
    requiredParam: 'url',
  },
  'doujin-img': {
    handler: scrape.komik.dojindsgetimg,
    requiredParam: 'url',
  },
  'komikindo-ch': {
    handler: scrape.komik.komikindogetch,
    requiredParam: null,
  },
  'doujin-latest': {
    handler: scrape.downloader.doujindesulatest,
    requiredParam: null,
  },
  hentai: {
    handler: scrape.downloader.hentai,
    requiredParam: null,
  },
  whatanime: {
    handler: traceMoe,
    requiredParam: 'url',
  },
  'nhentai-search': {
    handler: scrape.komik.nhentaisearch,
    requiredParam: 'q',
  },
};

apiRouter.use(apiKeyMiddleware);

Object.entries(handlers).forEach(([route, { handler, requiredParam }]) => {
  apiRouter.get(`/${route}`, async (req, res) => {
    try {
      const paramValue = req.query[requiredParam];

      if (requiredParam && !paramValue) {
        return res.status(400).json({ error: `Parameter tidak valid. ${requiredParam} diperlukan.` });
      }

      const data = await handler(paramValue);

      if (!data.length) {
        return res.json(global.msg.nodata);
      }

      res.json({ status: 'Berhasil!', code: 200, author, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Terjadi kesalahan internal server.' });
    }
  });
});

export default apiRouter;
