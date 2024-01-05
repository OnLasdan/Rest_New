const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const helloRouter = require('./src/hallo');
const apiR = require('./src/api/router');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Favicon
app.use('/favicon.ico', express.static(path.join(__dirname, 'assets', 'image', 'favicon.ico')));

// Swagger documentation
const swaggerDoc = require('./lib/options.js');
const options2 = require('./lib/config.js');
app.use('/docs', swaggerUI.serve, swaggerUI.setup(require('./lib/swagger.json'), options2));
swaggerDoc(app);

// Routes
app.use('/', helloRouter);
app.use('/api', apiR);

// Get client's IP address
app.get('/ip', (request, res) => {
  const ip = request.headers['cf-connecting-ip'] || request.headers['x-real-ip'] ||
    request.headers['x-forwarded-for'] || request.socket.remoteAddress || '';
  console.log(ip);
  return res.send({ ip });
});

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const fs = require('fs')
//ini buat mantau perubahan file sub swagger
const combinedJSON = require('./lib/combinedJSON')();
const chokidar = require('chokidar');
 const files = path.join(__dirname, 'lib', 'swagger.json');
const watcher = chokidar.watch('src/interface', {
  ignored: /(^|[/\\])\../, // ignore dotfiles
  persistent: true
});

watcher
  .on('add', path => {
    console.log(`File ${path} has been added`);
    fs.writeFileSync(files, JSON.stringify(combinedJSON), 'utf8');
  })
  .on('change', path => {
    console.log(`File ${path} has been changed`);
fs.writeFileSync(files, JSON.stringify(combinedJSON), 'utf8');
  })
  .on('unlink', path => {
    console.log(`File ${path} has been removed`);
    fs.writeFileSync(files, JSON.stringify(combinedJSON), 'utf8');
  });
