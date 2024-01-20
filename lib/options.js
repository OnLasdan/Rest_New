const fs = require('fs').promises;
const path = require('path');

module.exports = async function getConfig() {
  const customCssPath = path.join(__dirname,  'custom.css');
  const customCss = await fs.readFile(customCssPath, 'utf-8');

  return {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      requestSnippetsEnabled: true,
      docExpansion: 'list',
      defaultModelsExpandDepth: 1,
      operationsSorter: 'method',
    },
    customCss: customCss,
    customfavIcon: '../assets/image/2.png',
    customSiteTitle: ".M.U.F.A.R.",
    explorer: false,
    deepLinking: true,
  };
};
