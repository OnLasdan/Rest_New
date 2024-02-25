import express from 'express';
import fs from 'fs';
import axios from 'axios';
import { join } from 'path';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import { pickRandom } from '../../lib/function.js';
import coomer from '../../scrape/src/coomer/coomerAPIs.js';

const apiR = express.Router();
const __path = process.cwd();

apiR.get('/random-coomer/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const result = await coomer(username);
    const random = pickRandom(result);
    const response = await axios.get(random, { responseType: 'stream' });
    res.setHeader('Content-Type', 'image/jpeg');
    response.data.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

apiR.get('/:country', apiKeyMiddleware, async (req, res, next) => {
  try {
    const { country } = req.params;
    const filePath = join(__path, `/src/scrape/data/asupan/image/${country}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ status: 'Not Found', message: 'File not found' });
    }

    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const result = data[Math.floor(Math.random() * data.length)];

    const response = await axios.get(result, { responseType: 'stream' });
    res.setHeader('Content-Type', 'image/jpeg');
    response.data.pipe(res);
  } catch (error) {
    console.error(`Error in handling '/:country' endpoint:`, error);

    let errorMessage = 'Internal Server Error';
    if (error.code === 'ENOENT') {
      errorMessage = 'File not found';
    }

    res.status(500).json({
      status: 'Error',
      code: 500,
      message: errorMessage,
    });
  }
});

export default apiR;
