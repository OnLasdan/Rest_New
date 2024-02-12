import axios from 'axios'
import express from 'express'
import { pixart } from 'gpti'
import { fetchJson, getBuffer } from '../../lib/function.js'
import scrape from '../../scrape/index.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
const apiR = express.Router()
function pixartAsync(prompt, data) {
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

apiR.get('/bard', apiKeyMiddleware, async (req, res) => {
  const query = req.query.q

  if (!query) return res.json(global.msg.paramquery)

  try {
    const data = await fetchJson(`https://aemt.me/bard?text=${query}`)
    const aneh = data.result

    if (!aneh) return res.json(global.msg.nodata)

    res.json({
      status: 'Berhasil',
      code: 200,
      author: 'xyla',
      data: aneh,
    })
  } catch (error) {
    console.log('Error fetching data:', error)
    return res.status(500).json({ error: 'Kesalahan Server Internal' })
  }
})

apiR.get('/blackbox', async (req, res) => {
  try {
    const query = req.query.q

    if (!query) return res.json(global.msg.paramquery)

    const url = 'https://useblackbox.io/chat-request-v4'

    const data = {
      textInput: query,
      allMessages: [{ user: query }],
      stream: '',
      clickedContinue: false,
    }

    const response = await axios.post(url, data)
    const answer = response.data.response[0][0]

    const formattedResponse = {
      response: answer,
    }

    res.json({
      status: 'Success',
      code: 200,
      author: 'iky',
      data: formattedResponse,
    })
  } catch (error) {
    res.json({
      status: 'Error',
      code: 500,
      author: 'iky',
      message: 'Terjadi kesalahan dalam memproses permintaan.',
    })
  }
})

apiR.get('/bingimage', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)

  xorizn = await fetchJson(`https://aemt.me/bingimg?text=${query}`).then(
    (data) => {
      const aneh = data.result
      if (!aneh) return res.json(global.msg.nodata)
      res.json({
        status: 'Success',
        code: 200,
        author: 'iky',
        data: aneh,
      })
    }
  )
})

apiR.get('/deepenglish', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)

  scrape.others.deepenglish(query).then((data) => {
    const anu = data
    if (!anu) res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author: 'iky',
      data: anu,
    })
  })
})

apiR.get('/azure', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)

  scrape.others.azure(query).then((data) => {
    const anu = data
    if (!anu) res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author: 'iky',
      data: anu,
    })
  })
})

apiR.get('/gptonline', apiKeyMiddleware, async (req, res, next) => {
  const query = req.query.q
  if (!query) return res.json(global.msg.paramquery)

  scrape.others.gptonline(query).then((data) => {
    const anu = data
    if (!anu) res.json(global.msg.nodata)
    res.json({
      status: 'Success',
      code: 200,
      author: 'iky',
      data: anu,
    })
  })
})

apiR.get('/toanime', apiKeyMiddleware, async (req, res, next) => {
  const url = req.query.url
  if (!url) return res.json(global.msg.paramquery)

  try {
    const response = await fetchJson(`https://aemt.me/toanime?url=${url}`)
    const imageUrl = response.url.img_crop_single

    if (!imageUrl) return res.json(global.msg.nodata)

    const imageResponse = await getBuffer(imageUrl)

    res.set('Content-Type', 'image/png')
    res.send(imageResponse.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

apiR.get('/Pixart-A', apiKeyMiddleware, async (req, res, next) => {
  try {
    const prompt = req.query.prompt
    const style = req.query.style
    const sampler = req.query.sampler
    const width = req.query.width
    const height = req.query.height

    const data = {
      prompt_negative: '',
      sampler,
      image_style: style,
      width,
      height,
      dpm_guidance_scale: 4.5,
      dpm_inference_steps: 14,
      sa_guidance_scale: 3,
      sa_inference_steps: 25,
    }

    const response = await pixartAsync(prompt, data)

    if (response && response.images && response.images.length > 0) {
      let base64Image = response.images[0]
      base64Image = base64Image.replace(/^data:image\/jpeg;base64,/, '')

      res.contentType('image/jpeg')
      res.send(Buffer.from(base64Image, 'base64'))
    } else {
      res.json({
        status: 'Error',
        code: 500,
        author: 'iky',
        message: 'Tidak ada gambar ditemukan dalam respons.',
      })
    }
  } catch (error) {
    console.error(error)
    res.json({
      status: 'Error',
      code: 500,
      author: 'iky',
      message: 'Terjadi kesalahan dalam memproses permintaan.',
    })
  }
})

export default apiR
