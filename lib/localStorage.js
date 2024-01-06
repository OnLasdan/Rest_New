const fs = require('@cyclic.sh/s3fs');
const path = require('path');

const apiKeysPath = path.join(__dirname, 'apiKeys.json');

const readApiKeys = () => {
  try {
    const data = fs.readFileSync(apiKeysPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeApiKeys = (apiKeys) => {
  fs.writeFileSync(apiKeysPath, JSON.stringify(apiKeys, null, 2), 'utf-8');
};

module.exports = {
  readApiKeys,
  writeApiKeys,
};
