import express from 'express'
import { translate, langList } from '../../scrape/src/tools/translate.js'
import { cekGambar } from '../../scrape/src/tools/antiPorn.js'
import apiKeyMiddleware from '../../middlewares/apiKeyMiddleware.js'
const author = 'xyla'
const apiR = express.Router()

apiR.get('/:feature', apiKeyMiddleware, async (req, res) => {
  const { feature } = req.params

  try {
    switch (feature) {
      case 'translate':
        const { lang, text } = req.query
        if (!lang || !text) {
          return res.status(400).json({
            error: 'Invalid parameters. Both lang and text are required.',
          })
        }
        const translateData = await translate(lang, text)
        return res.json({
          status: 'Success',
          code: 200,
          author,
          data: translateData,
        })

      case 'langList':
        const languages = await langList()
        return res.json({ languages })

      case 'anti-porn':
        const imgUrl = req.query.url
        if (!imgUrl) {
          return res
            .status(400)
            .json({ error: 'Parameter url tidak ditemukan' })
        }
        const antiPornData = await cekGambar(imgUrl)
        return res.json({
          status: 'Success',
          code: 200,
          author,
          data: antiPornData,
        })

      default:
        return res.status(404).json({ error: 'Invalid feature.' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error.' })
  }
})

export default apiR
