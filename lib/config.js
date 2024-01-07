// lib/config.js
const fetch = require('node-fetch');

const getCustomCss = async () => {
  const response = await fetch("https://github.com/Pkok1024/Nao-MD/raw/main/custom.css");
  return await response.text();
};

module.exports = async function getConfig() {
  const customCss = await getCustomCss();
  return {
    persistAuthorization: true,
    customCss: customCss
  }
};
