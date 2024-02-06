import axios from 'axios';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import chalk from 'chalk';
import fs from 'fs';
import combinedJSON from './combinedJSON.js';
import { currentDirectory } from '../app.js';
import ora from 'ora';

const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.split('');

const fetchJson = async (url, options) => {
   try {
      options ? options : {};
      const res = await axios({
         method: 'GET',
         url: url,
         headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
         },
         ...options,
      });
      return res.data;
   } catch (err) {
      return err;
   }
};

const getBuffer = async (url, options) => {
   try {
      options ? options : {};
      const res = await axios({
         method: 'get',
         url,
         headers: {
            'DNT': 1,
            'Upgrade-Insecure-Request': 1,
         },
         ...options,
         responseType: 'arraybuffer',
      });
      return res.data;
   } catch (e) {
      console.log(`Error : ${e}`);
   }
};

const randomText = (len) => {
   const result = [];
   for (let i = 0; i < len; i++) result.push(pool[Math.floor(Math.random() * pool.length)]);
   return result.join('');
};

const getHashedPassword = (password) => {
   const sha256 = crypto.createHash('sha256');
   const hash = sha256.update(password).digest('base64');
   return hash;
};

const createActivationToken = (payload) => {
   const activationToken = jwt.sign(payload, activation_token, { expiresIn: '30m' });
   return activationToken;
};
// ========================================
const customLogger = morgan(function(tokens, req, res) {
    const method = tokens.method(req, res);
    const uri = decodeURI(tokens.url(req, res));
    const url = uri.replace(/ /g, '-');
    const status = tokens.status(req, res);
    const contentLength = tokens.res(req, res, 'content-length') || '-';
    const responseTime = tokens['response-time'](req, res);
    const ipAddress = req.ip;
    const userAgent = req.headers['user-agent'];

    const log = [
        `${chalk.green('Method:')} ${chalk.bold.green(method)}`,
        `${chalk.blue('URL:')} ${chalk.hex('#9933ff')(url)}`,
        `${chalk.cyan('Status:')} ${chalk.bold.cyan(status)}`,
        contentLength !== '-' ? `${chalk.green('Content Length:')} ${chalk.bold.green(contentLength)}` : '',
        responseTime < 500 ? `${chalk.blue('Response Time:')} ${chalk.bold.blue(responseTime+" ms")}` : `${chalk.red('Response Time:')} ${chalk.bold.red(responseTime + " ms")}`,
        `${chalk.magenta('IP Address:')} ${chalk.bold.magenta(ipAddress)}`,
        `${chalk.yellow('User Agent:')} ${chalk.bold.yellow(userAgent)}`,
    ];

    console.log(log.join('\n'));
});

async function swaggerWr() {
    const spinner = ora('Mengumpulkan swagger file').start();

    try {
        const resolvedCombinedJSON = await combinedJSON;
        fs.writeFileSync(`${currentDirectory}/lib/swagger.json`, JSON.stringify(resolvedCombinedJSON, null, 2));
        spinner.succeed('Swagger File Berhasil Disusun');
    } catch (error) {
        spinner.fail(`Gagal menulis file ke S3: ${error.message}`);
    }
}


export { 
  createActivationToken, 
  randomText, 
  getHashedPassword, 
  fetchJson, 
  getBuffer, 
  customLogger,
  swaggerWr
};
