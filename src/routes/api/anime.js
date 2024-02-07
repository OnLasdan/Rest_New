import msg from '../../lib/message.js';
import express from 'express';
import {
  doujindesusearch,
  doujindesuch,
  doujindesulatest,hentai
 } from '../../scrape/src/downloader/downloader.js';
 import {
  komikindogetch,
  dojindsgetimg,
  nhentaisearch
  } from '../../scrape/src/tools/komik.js'
 import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import traceMoe from '../../scrape/src/anime/whatAnime.js';
const author = 'xyla';

const apiR = express.Router();

apiR.get('/doujin-search', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.q;
   if (!url) return res.json(msg.paramurl);
   doujindesusearch(url)
      .then(data => {
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
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
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
         res.json({
            status: "Success",
            code: 200,
            author,
            data
         });
      });
});

apiR.get('/doujin-img', apiKeyMiddleware, async (req, res, next) => {
   const url = req.query.url;
   if (!url) return res.json(msg.paramurl);
   dojindsgetimg(url)
      .then(data => {
        console.log(data)
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
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
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
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
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
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
          if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
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

apiR.get('/nhentai-search', apiKeyMiddleware, async (req, res) => {
  const q = req.query.q;
  try {
    if (!q) {
      return res.status(400).json({ error: 'Invalid parameters. query is required.' });
    }
    
    const data = await nhentaisearch(q);
     if (data.length === 0) {
      return res.json({
        status: "Success",
        code: 200,
        author,
        message: 'No results found for the given query.',
      });
    }
    
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
