const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const fs = require('@cyclic.sh/s3fs');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const memoryStore = require('memorystore')(session);
const helloRouter = require('./src/hallo');
const apiR = require('./src/api/router');
const authenticateToken = require('./middlewares/authMiddleware');

dotenv.config();

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new memoryStore({
    checkPeriod: 86400000
  }),
}));

// Your existing middleware setup (morgan, cors, etc)
const combinedJSON = require('./lib/combinedJSON')();
const { writeApiKeys } = require('./lib/localStorage');
writeApiKeys('mupar');
const files = path.join(__dirname, 'lib', 'swagger.json');
fs.writeFileSync(files, JSON.stringify(combinedJSON));

//ini buat mantau perubahan file sub swagger
const chokidar = require('chokidar');
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

app.use(bodyParser.json()); // to use body object in requests
app.use(morgan('dev'));
app.use(cors());
app.set('trust proxy', 1);
app.use(compression());
app.use(favicon(path.join(__dirname, 'assets', 'image', '1.png')))
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const options2 = require('./lib/config.js')
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./lib/options.js');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./lib/swagger.json'), options2));
swaggerDoc(app);

// Register routes
app.use('/', helloRouter);

app.use('/api/verify', require('./routes/verifyRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', authenticateToken, apiR);

app.get('/ip', (request, res) => {
  const ip = request.headers['cf-connecting-ip'] || request.headers['x-real-ip'] ||
    request.headers['x-forwarded-for'] || request.socket.remoteAddress || '';
  console.log(ip)
  return res.send({ ip })
});

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
