import express from 'express'
import cors from 'cors'

import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express()

router.use(bodyParser.json())

router.use(cors())

router.set('view engine', 'ejs')
router.set('views', join(__dirname, '..', 'views'))
router.use(express.static(join(__dirname, '..', 'views', 'pages')))
router.get('/', (req, res) => {
  res.render('pages/home')
})
router.get('/document', (req, res) =>{
  res.render('pages/projects')
})
export default router
