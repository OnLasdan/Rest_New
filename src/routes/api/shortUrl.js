import express from 'express'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import { fetchJson } from '../../lib/function.js'
const apiR = express.Router()

apiR.get('/isgd', apiKeyMiddleware, async (req, res) => {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({
        error: 'url are required.'
      })
    }
    const response = await fetchJson(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! Status:
    ${response.status}`)
    }
    const data = response.shorturl

    res.json({
      status: 'Success',
      code: 200,
      author,
      data
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error.' })
  }
})

export default apiR
