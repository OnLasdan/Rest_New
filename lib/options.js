
const fs = require('fs')
const a = fs.readFileSync('./lib/custom.css')
module.exports = async function getConfig() {
    return {
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true, 
        requestSnippetsEnabled: true,
        docExpansion: 'list',
        defaultModelsExpandDepth: 1,
        operationsSorter: 'method',},
        customCss: a,
        customfavIcon: '../assets/image/1.png',
        customSiteTitle: ".M.U.F.A.R.",
        explorer: false,
        deepLinking: true,
    };
  };