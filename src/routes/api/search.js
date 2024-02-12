import express from 'express'
import { xnxxSearch } from '../../scrape/src/downloader/downloader.js'
import youtube from '../../scrape/src/search/youtube.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import wikipedia from '../../scrape/src/search/wikipedia.js'
const apiR = express.Router()
const __path = process.cwd()
const author = 'xyla'

apiR.get('/youtube', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)
  try {
    const data = await youtube(query)
    if (!data) res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author,
      data,
    })
  } catch (e) {
    next(e)
  }
})

apiR.get('/xnxx', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)
  try {
    const data = await xnxxSearch(query)
    if (!data) return res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author,
      data,
    })
  } catch (error) {
    next(error)
  }
})

apiR.get('/wikipedia', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)
  try {
    const data = await wikipedia(query)
    if (!data) return res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author,
      data,
    })
  } catch (error) {
    next(error)
  }
})

export default apiR
