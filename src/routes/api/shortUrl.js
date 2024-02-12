import axios from "axios"
import express from "express"
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import fetch from 'node-fetch'
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
    const response = await
    fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)
    if (!response.ok) { throw new Error(`HTTP error! Status:
    ${response.status}`); }
    const json = await response.json()
    const data = json.shorturl

    
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