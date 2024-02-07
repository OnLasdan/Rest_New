import express from 'express';
import { 
  translate, 
  langList
  } from '../../scrape/src/tools/translate.js'; 
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import {
  komikindogetch,
  dojindsgetimg,
  nkpepsddl,
  nekopoilatest,
  nhentaisearch
  } from '../../scrape/src/tools/komik.js'
const author = 'xyla';
const apiR = express.Router();

apiR.get('/translate', apiKeyMiddleware, async (req, res) => {
  try {
    const { lang, text } = req.query;

    if (!lang || !text) {
      return res.status(400).json({ error: 'Invalid parameters. Both lang and text are required.' });
    }

    const data = await translate(lang, text);
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

apiR.get('/langList', apiKeyMiddleware, async (req, res) => {
  try {
    const languages = await langList();
    res.json({ languages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

apiR.get('/nekopoi-letest', apiKeyMiddleware, async (req, res, next) => {
   try {
     const data = await nekopoilatest()
      res.json({
         status: "Success",
         code: 200,
         author,
         data
      });
   } catch (error) {
      next(error);
   }
});



export default apiR;
