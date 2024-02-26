import express from 'express'
import swaggerUi from 'swagger-ui-express'
import options2 from '../lib/options.js'
import { createRequire } from 'module'
const routerDocs = express.Router()
const options = await options2()

const require = createRequire(import.meta.url)
const swaggerModule = require('../lib/swagger.json')

routerDocs.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerModule, options)
)

export default routerDocs
