import express from 'express';
import fs from 'fs';
import { join } from 'path';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';

const apiR = express.Router();
let __path = process.cwd();
const countries = [
  'random',
  'potatogodzilla',
  'china',
  'indonesia',
  'japan',
  'korean',
  'malaysia',
  'thailand',
  'vietnam',
];

countries.forEach((country) => {
  apiR.get(`/${country}`, apiKeyMiddleware, async (req, res, next) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(
          join(__path, `/src/scrape/data/asupan/image/${country}.json`)
        )
      );
      const result = data[Math.floor(Math.random() * data.length)];

      res.status(200).json({
        status: 'Success',
        code: 200,
        author: 'Xyla',
        data: result,
      });
    } catch (error) {
      console.error(`Error in handling '/${country}' endpoint:`, error);
      res.status(500).json({
        status: 'Error',
        code: 500,
        message: 'Internal Server Error',
      });
    }
  });
});

export default apiR;
