require('../../lib/message');
const express = require( 'express' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
__path = process.cwd( );
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const sendFile = require('../../scrape/src/uploader/dicord.js')
const author = 'xyla'
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');
const {fromBuffer} = require('file-type'); // Import file-type module 
const path = require('path'); 

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const fileBuffer = req.file.buffer;
    const ext = path.extname(req.file.originalname);
    const result = await sendFile(fileBuffer, ext);
   
    res.json({
      status: 'Success',
      code: 200,
      author: author, // Assuming author is defined somewhere in your code
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



module.exports = apiR
