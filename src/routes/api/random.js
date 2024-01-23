import express from 'express';
import fs from 'fs';
import { join } from 'path';
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js';
let __path
const apiR = express();
__path = process.cwd();

apiR.get('/random', apiKeyMiddleware, async (req, res, next) => {
   let data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/random.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/potatogodzilla', apiKeyMiddleware, async (req, res, next) => {
   let data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/potatogodzilla.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/china', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/china.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/indonesia', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/indonesia.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/japan', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/japan.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/korean', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/korean.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/malaysia', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/malaysia.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/thailand', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/thailand.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

apiR.get('/vietnam', apiKeyMiddleware, async (req, res, next) => {
   const data = JSON.parse(fs.readFileSync(join(__path, '/scrape/data/asupan/image/vietnam.json')));
   var result = data[Math.floor(Math.random() * data.length)];

   res.status(200).json({
      status: "Success",
      code: 200,
      author: "Xyla",
      data: result
   });
});

export default apiR;
