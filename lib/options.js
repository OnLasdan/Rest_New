
const fs = require('fs');
const path = require('path');
const customCssPath = path.join(__dirname, 'custom.css');
const customCss = fs.readFileSync(customCssPath, 'utf-8');
//************************************
// plugins
//************************************
module.exports = async function getConfig() {
    return {
        persistAuthorization: true,
        customCss: customCss,
        customfavIcon: '../assets/image/1.png',
        customSiteTitle: ".M.U.F.A.R.",
        docExpansion: 'list',
        defaultModelsExpandDepth: 1,
      docExpansion: 'full',
      operationsSorter: 'method',
    };
};
