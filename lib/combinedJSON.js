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
      "version": "1.0.11"
    },
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
