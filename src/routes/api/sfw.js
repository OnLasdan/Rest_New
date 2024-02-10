import express from 'express';
import fs from 'fs';
import { join } from 'path';
import axios from 'axios';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';

const apiR = express.Router();
let __path = process.cwd();
const countries = [
  'akira',
  'elaina',
  'miku',
  'shota',
  'anna',
  'ikuyo',
  'neko',
  'takina',
  'asuna',
  'kaela',
  'rias',
  'waifu',
  'ayanokouji',
  'kaguya',
  'sakura',
  'yotsuba',
  'ayuzawa',
  'kaori',
  'sasuke',
  'yumeko',
  'bocchi',
  'kobo',
  'shina',
  'chisato',
  'kotori',
  'shinka',
  'cosplay',
  'loli',
  'shizuka',
];

countries.forEach((country) => {
  apiR.get(`/${country}`, apiKeyMiddleware, async (req, res, next) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(join(__path, `/src/scrape/data/sfw/${country}.json`))
      );
      const result = data[Math.floor(Math.random() * data.length)];

      const { data: imageBuffer } = await axios.get(result, {
        responseType: 'arraybuffer',
      });

      res.setHeader('Content-Type', 'image/jpeg');
      res.status(200).send(imageBuffer);
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
