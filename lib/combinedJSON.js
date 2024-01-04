const fs = require('fs');
const chokidar = require('chokidar');

let combinedJSON = generateCombinedJSON();

// Pantau perubahan pada file penyusun
const watcher = chokidar.watch([
  '../src/interface/aiEndpoints.js',
  '../src/interface/downloaderEndpoints.js',
  '../src/interface/randomEndpoints.js',
  '../src/interface/searchEndpoints.js',
  '../src/interface/uploadEndpoints.js',
  '../src/interface/miscEndpoints.js'
], {
  ignoreInitial: true
});

watcher.on('change', () => {
  console.log('File penyusun berubah. Memuat ulang combinedJSON...');
  combinedJSON = generateCombinedJSON();
});

module.exports = () => combinedJSON;


function generateCombinedJSON() {
  const aiEndpoints = require('../src/interface/aiEndpoints');
  const downloaderEndpoints = require('../src/interface/downloaderEndpoints');
  const randomEndpoints = require('../src/interface/randomEndpoints');
  const searchEndpoints = require('../src/interface/searchEndpoints');
  const uploadEndpoints = require('../src/interface/uploadEndpoints');
  const miscEndpoints = require('../src/interface/miscEndpoints')
  return {
  "openapi": "3.0.3",
  "info": {
    "title": ".M.U.F.A.R. API",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "onlasdan@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about APIs",
    "url": "https://onlasdan.cyclic.app/"
  },
  "servers": [
    {
      "url": "https://74e915b7-a538-4c8f-9c93-75669aed1940-00-1yynr6plmfyvk.sisko.replit.dev",
      "description": "endpoint"
    }
  ],
  "tags": [
    {
      "name": "Ai",
      "description": "Everything about Ai APIs",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/ai"
      }
    },
    {
      "name": "Downloader",
      "description": "Everything about Downloader",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/downloader"
      }
    },
    {
      "name": "Random",
      "description": "Random image and video",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/random"
      }
    },
    {
      "name": "Search",
      "description": "For Search some good things",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/search"
      }
    },
    {
      "name": "Uploader",
      "description": "File uploading API",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/uploader"
      }
    },
    // ... (tags lainnya)
    {
      "name": "Misc",
      "description": "mis features API",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://example.com/uploader"
      }
    },
  ],
  "paths": {
    ...aiEndpoints,
    ...downloaderEndpoints,
    ...randomEndpoints,
    ...searchEndpoints,
    ...uploadEndpoints, 
    ...miscEndpoints
  }
};

}

