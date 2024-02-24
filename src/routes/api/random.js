import express from 'express'
import fs from 'fs'
import { join } from 'path'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import scrape from '../../scrape/index.js'
import { pickRandom, getBuffer } from '../../lib/function.js'
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
  'jkt48',
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

      const buffer = await getBuffer(result)

      res.type('image/jpeg').send(buffer)
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
      const buffer = await getBuffer(random)

      res.type('image/jpeg').send(buffer)
    } catch (error) {
      console.error(`Error in handling '/${route}' endpoint:`, error)
      res.status(500).json({
        status: 'Error',
        code: 500,
        message: 'Internal Server Error',
      })
    }
  })
})
export default apiR
