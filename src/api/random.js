// routes/imageRoutes.js
const express = require('express');
const request = require('request');
const apiR = express();
const apiKeyMiddleware = require('../../middlewares/apiKeyMiddleware.js');
const fs = require('fs');
const path = require('path');

apiR.get('/random', apiKeyMiddleware, async (req, res, next) => {
  try {
    let data = JSON.parse(fs.readFileSync(__path + '/scrape/data/asupan/image/random.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
    };
    request(requestSettings, function (error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
    });
  } catch (error) {
    console.error("Error processing random image:", error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the random image.',
    });
  }
});

apiR.get('/potatogodzilla', apiKeyMiddleware, async (req, res, next) => {
  try {
    let data = JSON.parse(fs.readFileSync(__path + '/scrape/data/asupan/image/potatogodzilla.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
    };
    request(requestSettings, function (error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
    });
  } catch (error) {
    console.error("Error processing potatogodzilla image:", error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the potatogodzilla image.',
    });
  }
});

apiR.get('/china', apiKeyMiddleware, async (req, res, next) => {
  try {
    const data = JSON.parse(fs.readFileSync(__path + '/scrape/data/asupan/image/china.json'));
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
    };
    request(requestSettings, function (error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
    });
  } catch (error) {
    console.error("Error processing china image:", error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the china image.',
    });
  }
});

// Add more routes as needed

module.exports = apiR;
