const endpoints = [
  'aiEndpoints',
  'downloaderEndpoints',
  'randomEndpoints',
  'searchEndpoints',
  'uploadEndpoints',
  'miscEndpoints',
  'userEndpoints',
];

const combinedJSON = generateCombinedJSON();

console.log('Server is running...');

function generateCombinedJSON() {
  const modules = endpoints.map(endpoint => require(`../src/interface/${endpoint}`));

  return {
    "openapi": "3.0.0",
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
    "tags": [
      // ... (tags definition)
    ],
    "security": [
      {
        "apiKey": []
      }
    ],
    "components": {
      "securitySchemes": {
        "apiKey": {
          "type": "apiKey",
          "in": "query",
          "name": "apikey"
        }
      }
    },
    "paths": {
      ...modules.reduce((acc, module) => ({ ...acc, ...module }), {})
    }
  }
}

module.exports = combinedJSON;
