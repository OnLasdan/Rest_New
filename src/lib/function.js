import axios from 'axios';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import chalk from 'chalk';
import fs from 'fs';
import combinedJSON from './combinedJSON.js';
import { currentDirectory } from '../index.js';


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
    const url = tokens.url(req, res);
    const status = tokens.status(req, res);
    const contentLength = tokens.res(req, res, 'content-length') || '-';
    const responseTime = tokens['response-time'](req, res);
    const coloredUrl = chalk.keyword('purple')(url);

    const log = [
        chalk.bold.green(method),
        coloredUrl,
        chalk.keyword('orange')(status),
        contentLength === '-' ? '-' : chalk.bold.blue(contentLength),
        responseTime < 500 ? chalk.green(`${responseTime} ms`) : chalk.red(`${responseTime} ms`),
    ];

    return log.join(' ');
});
async function swaggerWr() {
    try {
        const resolvedCombinedJSON = await combinedJSON;
        fs.writeFileSync(`${currentDirectory}/lib/swagger.json`, JSON.stringify(resolvedCombinedJSON), 'utf-8');
        console.log(chalk.green('swagger File Successfully Asambled'));
    } catch (error) {
        console.error('Gagal menulis file ke S3:', error.message);
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
