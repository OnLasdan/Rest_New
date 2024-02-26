import express from 'express'
import scrape from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()

const errorHandler = (res, error) => {
  console.error(error)
  res.status(500).json({ error: 'Terjadi kesalahan internal server.' })
}

const addHandler = (route, { handler, requiredParam }) => {
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

      res.json({
        status: 'Berhasil!',
        code: 200,
        author,
        data,
      })
    } catch (error) {
      errorHandler(res, error)
    }
  })
}

apiR.use(apiKeyMiddleware)

addHandler('doujin-search', {
  handler: scrape.doujindesusearch,
  requiredParam: 'q',
})
addHandler('doujin-ch', { handler: scrape.doujindesuch, requiredParam: 'url' })
addHandler('doujin-img', {
  handler: scrape.dojindsgetimg,
  requiredParam: 'url',
})
addHandler('komikindo-ch', {
  handler: scrape.komikindogetch,
  requiredParam: null,
})
addHandler('doujin-latest', {
  handler: scrape.doujindesulatest,
  requiredParam: null,
})
addHandler('hentai', { handler: scrape.hentai, requiredParam: null })
addHandler('whatanime', { handler: scrape.traceMoe, requiredParam: 'url' })
addHandler('nhentai-search', {
  handler: scrape.nhentaisearch,
  requiredParam: 'q',
})

export default apiR
