import express from 'express'
import multer from 'multer'
import path from 'path'
import { sendFile } from '../../scrape/upload.js'
import User from '../../models/user.js'
import pixeldrain from '../../scrape/src/upload/pixeldrain.js'
const apiR = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    if (user.limit <= 0) {
      return res.status(403).json({ error: 'Limit exceeded.' })
    }
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' })

    const { buffer, originalname } = req.file
    const ext = path.extname(originalname)
    const result = await sendFile(buffer, ext)

    user.limit -= 1
    await user.save()

    res.json({
      status: 'Success',
      code: 200,
      author: 'Xyla',
      data: result,
    })
  } catch (error) {
    console.error('Error processing file upload:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the file upload.',
    })
  }
})

apiR.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { buffer, originalname } = req.file
    const ext = path.extname(originalname)
    const result = await pixeldrain(buffer)

    res.json({
      status: 'Success',
      code: 200,
      author: 'Xyla',
      data: result,
    })
  } catch (error) {
    console.error('Error processing file upload:', error)
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred while processing the file upload.',
    })
  }
})



export default apiR
