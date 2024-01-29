import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import dotenv from 'dotenv';
import compression from 'compression';
import session from 'express-session';
import { createRequire } from 'module';
import helloRouter from './views/home.js';
import R404 from './views/error.js';
import apiR from './routes/api/router.js';
import resetLimitsCron from './lib/resetLimitsCron.js'; 
import options2 from './lib/options.js';
import verifyRoutes from './routes/verifyRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { swaggerWr, customLogger } from './lib/function.js'
import chalk from 'chalk';
const require = createRequire(import.meta.url);
const options = await options2(); 
const swaggerModule = require('./lib/swagger.json');
dotenv.config();

resetLimitsCron();

export const currentDirectory = path.dirname(new URL(import.meta.url).pathname);
export const app = express();
app.use(customLogger);
if (process.env.NODE_ENV === 'development') {
swaggerWr();
}
// ========================================
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: 'uh58h5yj8',
    resave: false,
    saveUninitialized: true,
  })
);
app.set('trust proxy', 1);
app.use(compression());
app.use(favicon(path.join(currentDirectory, 'assets', 'image', '2.png')));
app.use('/assets', express.static(path.join(currentDirectory, 'assets')));
app.enable('trust proxy');
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerModule, options));

app.use('/', helloRouter, verifyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', apiR);
app.get('/ip', (request, res) => {
    const ip = request.headers['x-forwarded-for'] || request.remoteAddress;
    console.log(ip);
    return res.send({ ip });
});
app.get('/login', (req, res) => {
const login = new URL('./views/pages/login/index.html', import.meta.url).pathname
  res.sendFile(login)
} )
app.use((err, req, res, next) => {
  console.error(err.stack);
  let page = new URL('./views/pages/ERROR/500.html', import.meta.url).pathname
  res.status(500).sendFile(page);
console.log(page)
  });

app.use(R404)
// ========================================
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(chalk.cyan(`Server is running on port ${port}`));
});

export default app;
/* experimental code for learning javascript */

