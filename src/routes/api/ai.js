/* eslint-disable no-case-declarations */
import express from 'express'
import axios from 'axios'
import { pixart } from 'gpti'
import { fetchJson, getBuffer } from '../../lib/function.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiRouter = express.Router()
const author = 'xyla'

const handleSuccess = (res, data) => {
  res.json({
    status: 'Success',
    code: 200,
    author,
    data,
  })
}

const pixartAsync = async (prompt, data) => {
  try {
    return await new Promise((resolve, reject) => {
      pixart.a({ prompt, data }, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  } catch (error) {
    throw new Error('Failed to process Pixart request.')
  }
}

apiRouter.get('/:feature', apiKeyMiddleware, async (req, res, next) => {
  const { feature } = req.params

  try {
    switch (feature) {
      case 'bard':
        const bardQuery = req.query.q
        if (!bardQuery) return res.json({ error: 'Missing query parameter.' })

        const bardData = await fetchJson(
          `https://aemt.me/bard?text=${bardQuery}`
        )
        if (!bardData.result) return res.json({ error: 'No data found.' })

        handleSuccess(res, bardData.result)
        break

      case 'blackbox':
        const blackboxQuery = req.query.q
        if (!blackboxQuery)
          return res.json({ error: 'Missing query parameter.' })

        const blackboxUrl = 'https://useblackbox.io/chat-request-v4'
        const blackboxData = {
          textInput: blackboxQuery,
          allMessages: [{ user: blackboxQuery }],
          stream: '',
          clickedContinue: false,
        }
        const blackboxResponse = await axios.post(blackboxUrl, blackboxData)
        const blackboxAnswer = blackboxResponse.data.response[0][0]
        handleSuccess(res, { response: blackboxAnswer })
        break

      case 'bingimage':
        const bingQuery = req.query.q
        if (!bingQuery) return res.json({ error: 'Missing query parameter.' })

        const bingData = await fetchJson(
          `https://aemt.me/bingimg?text=${bingQuery}`
        )
        if (!bingData.result) return res.json({ error: 'No data found.' })

        handleSuccess(res, bingData.result)
        break

      case 'toanime':
        const url = req.query.url
        if (!url) return res.json({ error: 'Missing URL parameter.' })

        const response = await fetchJson(`https://aemt.me/toanime?url=${url}`)
        const imageUrl = response.url.img_crop_single
        if (!imageUrl) return res.json({ error: 'No data found.' })

        const imageResponse = await getBuffer(imageUrl)
        res.set('Content-Type', 'image/png')
        res.send(imageResponse.data)
        break

      case 'Pixart-A':
        const pixartPrompt = req.query.prompt
        const pixartStyle = req.query.style
        const pixartSampler = req.query.sampler
        const pixartWidth = req.query.width
        const pixartHeight = req.query.height
        const pixartData = {
          prompt_negative: '',
          sampler: pixartSampler,
          image_style: pixartStyle,
          width: pixartWidth,
          height: pixartHeight,
          dpm_guidance_scale: 4.5,
          dpm_inference_steps: 14,
          sa_guidance_scale: 3,
          sa_inference_steps: 25,
        }
        const pixartResponse = await pixartAsync(pixartPrompt, pixartData)
        if (
          pixartResponse &&
          pixartResponse.images &&
          pixartResponse.images.length > 0
        ) {
          let base64Image = pixartResponse.images[0]
          base64Image = base64Image.replace(/^data:image\/jpeg;base64,/, '')
          res.contentType('image/jpeg')
          res.send(Buffer.from(base64Image, 'base64'))
        } else {
          return res.json({ error: 'No image found in the response.' })
        }
        break

      default:
        return res.status(404).json({ error: 'Invalid feature.' })
    }
  } catch (error) {
    next(error)
  }
})

export default apiRouter
