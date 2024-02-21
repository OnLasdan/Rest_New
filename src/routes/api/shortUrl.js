import express from 'express';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
import scrape from '../../scrape/index.js';
import fetch from 'node-fetch';

const apiR = express.Router();

apiR.get('/:shortener', apiKeyMiddleware, async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        error: 'URL is required.',
      });
    }

    let shortUrl;

    switch (req.params.shortener) {
      case 'isgd':
        shortUrl = await shortenWithIsGd(url);
        break;
        
      case 'tiny':
        shortUrl = await scrape.shortlink(encodeURIComponent(url));
        break;

      default:
        return res.status(400).json({
          error: 'Invalid shortener specified.',
        });
    }

    res.json({
      status: 'Success',
      code: 200,
      author,
      data: shortUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

async function shortenWithIsGd(url) {
  const response = await fetch(
    `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const json = await response.json();
  return json.shorturl;
}

export default apiR;
