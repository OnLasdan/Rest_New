import express from 'express'
import scrape from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()

const performSearch = async (req, res, next, searchFunction) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)

  try {
    const data = await searchFunction(query)
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
}

apiR.get('/:feature', apiKeyMiddleware, async (req, res, next) => {
  const { feature } = req.params
  try {
    switch (feature) {
      case 'youtube':
        performSearch(req, res, next, scrape.youtube)
        break

      case 'xnxx':
        performSearch(req, res, next, scrape.xnxxSearch)
        break

      case 'wikipedia':
        performSearch(req, res, next, scrape.wikipedia)
        break

      default:
        res.status(404).json({ error: 'Invalid feature.' })
        break
    }
  } catch (error) {
    next(error)
  }
})

export default apiR
