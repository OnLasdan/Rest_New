import express from 'express'
import multer from 'multer'
import path from 'path'
import { sendFile } from '../../scrape/upload.js'
import User from '../../models/user.js'
const apiR = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

apiR.post('/cdn', upload.single('file'), async (req, res) => {
  try {
    const { buffer, originalname } = req.file
    const ext = path.extname(originalname)
    const result = await sendFile(buffer, ext)

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
