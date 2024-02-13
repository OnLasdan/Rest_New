import express from 'express'
import axios from 'axios']
import { fetchJson, getBuffer } from '../../lib/function.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'

const apiR = express.Router()
const author = 'xyla'

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

const pixartAsync = async (prompt, data) => {
  return new Promise((resolve, reject) => {
    pixart.a({ prompt, data }, (err, response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response)
      }
    })
  })
}

apiR.get('/:feature', apiKeyMiddleware, async (req, res, next) => {
  const { feature } = req.params

  try {
    switch (feature) {
      case 'bard':
        const bardQuery = req.query.q
        if (!bardQuery) return res.json(global.msg.paramquery)
        const bardData = await fetchJson(
          `https://aemt.me/bard?text=${bardQuery}`
        )
        if (!bardData.result) return res.json(global.msg.nodata)
        return res.json({
          status: 'Berhasil',
          code: 200,
          author: 'xyla',
          data: bardData.result,
        })

      case 'blackbox':
        const blackboxQuery = req.query.q
        if (!blackboxQuery) return res.json(global.msg.paramquery)
        const blackboxUrl = 'https://useblackbox.io/chat-request-v4'
        const blackboxData = {
          textInput: blackboxQuery,
          allMessages: [{ user: blackboxQuery }],
          stream: '',
          clickedContinue: false,
        }
        const blackboxResponse = await axios.post(blackboxUrl, blackboxData)
        const blackboxAnswer = blackboxResponse.data.response[0][0]
        return res.json({
          status: 'Success',
          code: 200,
          author: 'iky',
          data: { response: blackboxAnswer },
        })

      case 'bingimage':
        const bingQuery = req.query.q
        if (!bingQuery) return res.json(global.msg.paramquery)
        const bingData = await fetchJson(
          `https://aemt.me/bingimg?text=${bingQuery}`
        )
        if (!bingData.result) return res.json(global.msg.nodata)
        return res.json({
          status: 'Success',
          code: 200,
          author: 'iky',
          data: bingData.result,
        })

      case 'toanime':
        const url = req.query.url
        if (!url) return res.json(global.msg.paramquery)
        try {
          const response = await fetchJson(`https://aemt.me/toanime?url=${url}`)
          const imageUrl = response.url.img_crop_single
          if (!imageUrl) return res.json(global.msg.nodata)
          const imageResponse = await getBuffer(imageUrl)
          res.set('Content-Type', 'image/png')
          return res.send(imageResponse.data)
        } catch (error) {
          console.error(error)
          return res.status(500).json({ error: 'Internal Server Error' })
        }

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
        try {
          const pixartResponse = await pixartAsync(pixartPrompt, pixartData)
          if (
            pixartResponse &&
            pixartResponse.images &&
            pixartResponse.images.length > 0
          ) {
            let base64Image = pixartResponse.images[0]
            base64Image = base64Image.replace(/^data:image\/jpeg;base64,/, '')
            res.contentType('image/jpeg')
            return res.send(Buffer.from(base64Image, 'base64'))
          } else {
            return res.json({
              status: 'Error',
              code: 500,
              author: 'iky',
              message: 'Tidak ada gambar ditemukan dalam respons.',
            })
          }
        } catch (error) {
          console.error(error)
          return res.json({
            status: 'Error',
            code: 500,
            author: 'iky',
            message: 'Terjadi kesalahan dalam memproses permintaan.',
          })
        }

      default:
        return res.status(404).json({ error: 'Invalid feature.' })
    }
  } catch (error) {
    next(error)
  }
})

export default apiR
