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
dotenv.config();
require('./lib/resetLimitsCron');
const authenticateToken = require('./middlewares/authMiddleware');
// Your existing middleware setup (morgan, cors, etc)
swaggerWr();

//app.use(authenticateToken);


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
const options2 = require('./lib/options.js');
  options2().then((options) => {
    const swaggerUi = require('swagger-ui-express');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./lib/swagger.json'), options));
  });

// Register routes
apiRouter();
// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function apiRouter() {
    app.use('/', helloRouter);

    app.use('/', require('./routes/verifyRoutes'));
    app.use('/api/auth', require('./routes/authRoutes'));
    app.use('/api', apiR);

    app.get('/ip', (request, res) => {
        const ip = request.headers['cf-connecting-ip'] || request.headers['x-real-ip'] ||
            request.headers['x-forwarded-for'] || request.socket.remoteAddress || '';
        console.log(ip);
        return res.send({ ip });
    });
}

function swaggerWr() {
    const combinedJSON = require('./lib/combinedJSON');
    const files = path.join(__dirname, 'lib', 'swagger.json');
    fs.writeFileSync(files, JSON.stringify(combinedJSON));
    app.use(cookieParser());
}

