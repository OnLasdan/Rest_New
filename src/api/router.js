// main-file.js
const express = require('express');
const apiR = express.Router();
const cors = require('cors')
//Updated file?
apiR.use(cors());
//buat defined routes
  apiR.use('/random', require('./random'));
  apiR.use('/downloader', require('./downloader'));
  apiR.use('/ai', require('./ai'));
  apiR.use('/canvas', require('./canvas'));
  apiR.use('/upload', require('./upload'));
  apiR.use('/search', require('./search'));

module.exports = apiR;
