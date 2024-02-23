import express from 'express'
import fs from 'fs'
import { join } from 'path'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import scrape from '../../scrape/index.js'
import { pickRandom } from '../../lib/function.js'
import fetch from 'node-fetch'

const apiR = express.Router()
const __path = process.cwd()
const countries = [
  'random',
  'potatogodzilla',
  'china',
  'indonesia',
  'japan',
  'korean',
  'malaysia',
  'thailand',
  'vietnam',
  'nude',
  'naughty',
]

countries.forEach((country) => {
  apiR.get(`/${country}`, apiKeyMiddleware, async (req, res, next) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(
          join(__path, `/src/scrape/data/asupan/image/${country}.json`)
        )
      )
      const result = data[Math.floor(Math.random() * data.length)]

      res.status(200).json({
        status: 'Success',
        code: 200,
        author: 'Xyla',
        data: result,
      })
    } catch (error) {
      console.error(`Error in handling '/${country}' endpoint:`, error)
      res.status(500).json({
        status: 'Error',
        code: 500,
        message: 'Internal Server Error',
      })
    }
  })
})

const routes = ['/belledelphine', '/imsadspice', '/mayvisalycevip']

routes.forEach((route) => {
  apiR.get(route, apiKeyMiddleware, async (req, res, next) => {
    try {
      const result = await scrape.coomer(
        `https://coomer.su/onlyfans/user${route}`
      )

      const random = pickRandom(result.imageUrls)
      const imageResponse = await fetch(random)
      const imageBuffer = await imageResponse.buffer()

      res.type('image/jpeg').send(imageBuffer)
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error')
    }
  })
})
export default apiR
