import express from 'express'
import fs from 'fs'
import { join } from 'path'
import axios from 'axios'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()
const __path = process.cwd()

const dataDir = join(__path, '/src/scrape/data/sfw')

const filenames = fs.readdirSync(dataDir)

filenames.forEach((filename) => {
  apiR.get(
    `/${filename.replace('.json', '')}`,
    apiKeyMiddleware,
    async (req, res, next) => {
      try {
        const filePath = join(dataDir, filename)
        const data = JSON.parse(fs.readFileSync(filePath))
        const result = data[Math.floor(Math.random() * data.length)]

        const { data: imageBuffer } = await axios.get(result, {
          responseType: 'arraybuffer',
        })

        res.setHeader('Content-Type', 'image/jpeg')
        res.status(200).send(imageBuffer)
      } catch (error) {
        console.error(
          `Error in handling '/${filename.replace('.json', '')}' endpoint:`,
          error
        )
        res.status(500).json({
          status: 'Error',
          code: 500,
          message: 'Internal Server Error',
        })
      }
    }
  )
})

export default apiR
