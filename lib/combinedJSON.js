const fs = require('fs');
const path = require('path');

function getAllEndpoints() {
  const interfacePath = path.join(__dirname, '../src/interface');
  const jsFiles = fs.readdirSync(interfacePath).filter(file => file.endsWith('.js'));
  return jsFiles.map(file => require(path.join(interfacePath, file)));
}
function generateCombinedJSON() {
  const modules = getAllEndpoints();

  return {
    "openapi": "3.0.0",
    "info": {
      "title": ".M.U.F.A.R. APIs",
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
      ...modules.reduce((acc, module) => {
        return {
          ...acc,
          ...module
        };
      }, {})
    }
  }
}
const combinedJSON = generateCombinedJSON();

console.log('swagger has been asamble...');

module.exports = combinedJSON;
