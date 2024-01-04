const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;
