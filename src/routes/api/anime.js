import express from 'express'
import scrape from '../../scrape/index.js' // Sesuaikan dengan struktur direktori Anda
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import traceMoe from '../../scrape/src/anime/whatAnime.js'

const author = 'Xyla'
const apiR = express.Router()

const handlers = {
  'doujin-search': scrape.doujindesusearch,
  'doujin-ch': scrape.doujindesuch,
  'doujin-img': scrape.dojindsgetimg,
  'komikindo-ch': scrape.komikindogetch,
  'doujin-latest': scrape.doujindesulatest,
  hentai: scrape.hentai,
  whatanime: async (req, res) => {
    const url = req.query.url

    try {
      if (!url) {
        return res
          .status(400)
          .json({ error: 'Invalid parameters. URL is required.' })
      }

      const data = await traceMoe(url)
      if (data.length === 0) {
        return res.json(global.mdg.nodata)
      }
      res.json({
        status: 'Success',
        code: 200,
        author,
        data,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error.' })
    }
  },
  'nhentai-search': async (req, res) => {
    const q = req.query.q
    try {
      if (!q) {
        return res
          .status(400)
          .json({ error: 'Invalid parameters. query is required.' })
      }

      const data = await scrape.nhentaisearch(q)
      if (data.length === 0) {
        return res.json(global.msg.nodata)
      }

      res.json({
        status: 'Success',
        code: 200,
        author,
        data,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error.' })
    }
  },
}

Object.keys(handlers).forEach((route) => {
  apiR.get(`/${route}`, apiKeyMiddleware, async (req, res, next) => {
    const handler = handlers[route]
    const url = req.query.url
    const q = req.query.q

    if (
      (route === 'doujin-search' ||
        route === 'doujin-ch' ||
        route === 'doujin-img') &&
      !url
    ) {
      return res.json(global.msg.paramurl)
    }

    if (route === 'nhentai-search' && !q) {
      return res
        .status(400)
        .json({ error: 'Invalid parameters. query is required.' })
    }

    handler(url || q).then((data) => {
      if (data.length === 0) {
        return res.json(global.msg.nodata)
      }
      res.json({
        status: 'Success',
        code: 200,
        author,
        data,
      })
    })
  })
})

export default apiR
