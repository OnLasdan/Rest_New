import express from 'express'
import scrape from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()

const handlers = {
  'doujin-search': {
    handler: scrape.doujindesusearch,
    requiredParam: 'url',
  },
  'doujin-ch': {
    handler: scrape.doujindesuch,
    requiredParam: 'url',
  },
  'doujin-img': {
    handler: scrape.dojindsgetimg,
    requiredParam: 'url',
  },
  'komikindo-ch': {
    handler: scrape.komikindogetch,
    requiredParam: null,
  },
  'doujin-latest': {
    handler: scrape.doujindesulatest,
    requiredParam: null,
  },
  hentai: {
    handler: scrape.hentai,
    requiredParam: null,
  },
  whatanime: {
    handler: scrape.traceMoe,
    requiredParam: 'url',
  },
  'nhentai-search': {
    handler: scrape.nhentaisearch,
    requiredParam: 'q',
  },
}

apiR.use(apiKeyMiddleware)

Object.entries(handlers).forEach(([route, { handler, requiredParam }]) => {
  apiR.get(`/${route}`, async (req, res) => {
    try {
      const paramValue = req.query[requiredParam]

      if (requiredParam && !paramValue) {
        return res.status(400).json({
          error: `Parameter tidak valid. ${requiredParam} diperlukan.`,
        })
      }

      const data = await handler(paramValue)

      if (!data.length) {
        return res.json(global.msg.nodata)
      }

      res.json({ status: 'Berhasil!', code: 200, author, data })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Terjadi kesalahan internal server.' })
    }
  })
})

export default apiR
