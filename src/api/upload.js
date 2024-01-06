const express = require('express');
const multer = require('multer');
const path = require('path');
const sendFile = require('../../scrape/src/uploader/dicord.js');
const { readApiKeys, writeApiKeys } = require('../../lib/localStorage');

const apiR = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    const { apiKey } = req.body;

    // Validate API key
    const validApiKeys = readApiKeys();
    if (!validApiKeys.includes(apiKey)) {
      return res.status(401).json({ error: 'Invalid API key.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const fileBuffer = req.file.buffer;
    const ext = path.extname(req.file.originalname);
    const result = await sendFile(fileBuffer, ext);

    res.json({
      status: 'Success',
      code: 200,
      author: 'xyla', // Assuming author is defined somewhere in your code
      data: result,
    });
  } catch (error) {
    console.error("Error processing file upload:", error);

    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the file upload.',
    });
  }
});

module.exports = apiR;
