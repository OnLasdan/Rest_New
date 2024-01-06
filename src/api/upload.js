const express = require('express');
const multer = require('multer');
const path = require('path');
const sendFile = require('../../scrape/src/uploader/dicord.js');
const User = require('../../models/user');
const apiR = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    const { apiKey } = req.body;

    // Validate API key
    const user = await User.findOne({ apiKey });

    if (!user) {
      return res.status(401).json({ error: 'Invalid API key.' });
    }

    // Check if the limit is greater than 0
    if (user.limit <= 0) {
      return res.status(403).json({ error: 'Limit exceeded.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const fileBuffer = req.file.buffer;
    const ext = path.extname(req.file.originalname);

    // Process the file (assuming sendFile is an async function)
    const result = await sendFile(fileBuffer, ext);

    // Decrement the limit by 1
    user.limit -= 1;

    // Save the updated user to the database
    await user.save();

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
