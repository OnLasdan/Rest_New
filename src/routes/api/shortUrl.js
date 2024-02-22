import express from 'express'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
import scrape from '../../scrape/index.js'
import fetch from 'node-fetch'

const apiR = express.Router()

apiR.get('/:shortener', apiKeyMiddleware, async (req, res) => {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({
        error: 'URL is required.',
      })
    }

    if (!url || !isValidURL(url)) {
      return res.status(400).json({
        error: 'Valid URL is required.',
      })
    }

    let shortUrl

    switch (req.params.shortener) {
      case 'isgd':
        shortUrl = await shortenWithIsGd(decodeURIComponent(url))
        break

      case 'vgd':
        shortUrl = await shortenWithVgd(decodeURIComponent(url))
        break

      case 'tiny':
        shortUrl = await scrape.shortlink(decodeURIComponent(url))
        break

      case 'vurl':
        shortUrl = await VURL(decodeURIComponent(url))
        break

      default:
        return res.status(400).json({
          error: 'Invalid shortener specified.',
        })
    }

    res.json({
      status: 'Success',
      code: 200,
      author,
      data: shortUrl,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error.' })
  }
})

async function VURL(url) {
  const response = await fetch(`https://vurl.com/api.php?url=${url}`)
  if (!response.ok) {
    throw new Error(`HTTP error ! Status: &{response.status}`)
  }
  const json = await response.json()
  return json
}

async function shortenWithVgd(url) {
  const response = await fetch(
    `https://v.gd/create.php?format=json&url=${decodeURIComponent(url)}`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  const json = await response.json()
  return json.shorturl
}

async function shortenWithIsGd(url) {
  const response = await fetch(
    `https://is.gd/create.php?format=json&url=${decodeURIComponent(url)}`
  )
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  const json = await response.json()
  return json.shorturl
}

function isValidURL(url) {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
  return urlRegex.test(url)
}

export default apiR
