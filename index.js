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
const helloRouter = require('./src/hallo');
const apiR = require('./src/api/router');
dotenv.config();
require('./lib/resetLimitsCron');

// Fungsi untuk menyimpan file Swagger JSON
function swaggerWr() {
    const combinedJSON = require('./lib/combinedJSON');
    const files = path.join(__dirname, 'lib', 'swagger.json');
    fs.writeFileSync(files, JSON.stringify(combinedJSON));
    app.use(cookieParser());
}

swaggerWr()
// Middleware untuk token otentikasi
//app.use(authenticateToken);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(session({
  secret: 'uh58h5yj8',
  resave: false,
  saveUninitialized: true,
}));
app.set('trust proxy', 1);
app.use(compression());
app.use(favicon(path.join(__dirname, 'assets', 'image', '1.png')))
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Opsi untuk Swagger UI
async function setupSwagger() {
    const options2 = require('./lib/options.js');
    const options = await options2();

    const swaggerUi = require('swagger-ui-express');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./lib/swagger.json'), options));
}

// Panggil fungsi setupSwagger di dalam blok async
setupSwagger();

// Middleware rute API
app.use('/', helloRouter);
app.use('/', require('./routes/verifyRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', apiR);

// Rute untuk mendapatkan alamat IP
app.get('/ip', (request, res) => {
    const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log(ip);
    return res.send({ ip });
});

// Middleware penanganan kesalahan
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Menjalankan server
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

