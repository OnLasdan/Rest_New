const { getCustomCss } = require('./config');

module.exports = async function getConfig() {
    const customCss = await getCustomCss();
    return {
        persistAuthorization: true,
        customCss: customCss
    };
};
