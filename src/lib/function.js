import axios from 'axios'
import crypto from 'crypto'
import morgan from 'morgan'
import chalk from 'chalk'
import fs from 'fs'
import combinedJSON from './combinedJSON.js'
import ora from 'ora'
import yaml from 'js-yaml'
import path from 'path'
const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'
const currentDirectory = path.dirname(new URL(import.meta.url).pathname)

/**
 * Bikin file JavaScript Swagger dari file YAML Swagger, nih.
 * @param {string} inputFilePath - Lokasi file YAML Swagger.
 * @param {string} outputFilePath - Lokasi file JavaScript Swagger yang bakal dibikin.
 */

function swaggerJs(inputFilePath, outputFilePath) {
  try {
    const yamlContent = fs.readFileSync(inputFilePath, 'utf8')
    const yamlData = yaml.load(yamlContent)
    let jsFileContent = ''

    for (const [route, data] of Object.entries(yamlData.paths)) {
      const [, api, ...rest] = route.split('/')

      if (api === 'api' && rest.length > 0) {
        const outputData = {
          paths: {
            [route]: data,
          },
        }
        const outputYaml = yaml.dump(outputData)

        jsFileContent += `
/**
 * @swagger
 * ${outputYaml.replace(/\n/g, '\n * ')}
 */
`
      }
    }
    fs.writeFileSync(outputFilePath, jsFileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err)
      }
    })
    console.log(`File ${outputFilePath} berhasil dibuat.`)
  } catch (err) {
    console.error('Error:', err)
  }
}

/**
 * Lakukan GET HTTP dengan axios, dapatkan datanya dalam bentuk JSON.
 * @param {string} url - URL endpoint.
 * @param {Object} options - Opsi ekstra buat permintaan HTTP.
 * @returns {Promise} - Hasil GET HTTP, datanya dalam format JSON.
 */

const fetchJson = async (url, options) => {
  try {
    options = options || {}
    const res = await axios({
      method: 'GET',
      url,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
      },
      ...options,
    })
    return res.data
  } catch (err) {
    return err
  }
}

/**
 * Lakukan GET HTTP dengan axios, dapetin datanya dalam bentuk array buffer.
 * @param {string} url - URL endpoint.
 * @param {Object} options - Opsi ekstra buat permintaan HTTP.
 * @returns {Promise} - Hasil GET HTTP, datanya dalam format array buffer.
 */

const getBuffer = async (url, options) => {
  try {
    options = options || {}
    const res = await axios({
      method: 'get',
      url,
      headers: {
        DNT: 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}

/**
 * Bikin teks acak berdasarkan panjang yang diinginkan, seru nih!
 * @param {number} len - Panjang teks acak yang mau dibuat.
 * @returns {string} - Teks acak hasil kreasinya.
 */

const randomText = (len) => {
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(pool[Math.floor(Math.random() * pool.length)])
  }
  return result.join('')
}

/**
 * Dapetin hash dari password pakai algoritma SHA-256. Mantap!
 * @param {string} password - Password yang bakal di-hash.
 * @returns {string} - Password yang udah di-hash.
 */

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256')
  const hash = sha256.update(password).digest('base64')
  return hash
}

/**
 * Logger khusus buat catet info GET HTTP. Keren!
 * @type {Function}
 */

const customLogger = morgan(function (tokens, req, res) {
  const method = tokens.method(req, res)
  const uri = decodeURI(tokens.url(req, res))
  const url = uri.replace(/ /g, '-')
  const status = tokens.status(req, res)
  const contentLength = tokens.res(req, res, 'content-length') || '-'
  const responseTime = tokens['response-time'](req, res)
  const ipAddress = req.ip
  const userAgent = req.headers['user-agent']

  const log = [
    `${chalk.green('Method:')} ${chalk.bold.green(method)}`,
    `${chalk.blue('URL:')} ${chalk.hex('#9933ff')(url)}`,
    `${chalk.cyan('Status:')} ${chalk.bold.cyan(status)}`,
    contentLength !== '-'
      ? `${chalk.green('Content Length:')} ${chalk.bold.green(contentLength)}`
      : '',
    responseTime < 500
      ? `${chalk.blue('Response Time:')} ${chalk.bold.blue(responseTime + ' ms')}`
      : `${chalk.red('Response Time:')} ${chalk.bold.red(responseTime + ' ms')}`,
    `${chalk.magenta('IP Address:')} ${chalk.bold.magenta(ipAddress)}`,
    `${chalk.yellow('User Agent:')} ${chalk.bold.yellow(userAgent)}`,
  ]

  console.log(log.join('\n'))
})

/**
 * Proses buat file Swagger dalam format YAML dan JSON. Seru nih!
 * @returns {Promise} - Berhasil atau gagalnya tergantung keberuntungan.
 */

async function swaggerWr() {
  const spinner = ora('Mengumpulkan swagger file').start()

  try {
    const resolvedCombinedJSON = await combinedJSON
    const json = fs.readFileSync(`${currentDirectory}/swagger.json`, 'utf8')
    const jsonObject = JSON.parse(json)
    const yamlContent = yaml.dump(jsonObject)

    fs.writeFileSync(
      `${currentDirectory}/swagger.json`,
      JSON.stringify(resolvedCombinedJSON, null, 2)
    )

    fs.writeFileSync(`${currentDirectory}/swagger.yaml`, yamlContent)
    spinner.succeed('Swagger File Berhasil Disusun')

    await swaggerJs(
      `${currentDirectory}/swagger.yaml`,
      `${currentDirectory}/swagger.js`
    )
  } catch (error) {
    spinner.fail(`Gagal menulis file ke S3:\n ${error.message}`)
  }
}

const pickRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export {
  randomText,
  getHashedPassword,
  fetchJson,
  getBuffer,
  customLogger,
  swaggerWr,
  pickRandom,
}
