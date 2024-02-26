// app.js
import bodyParser from 'body-parser'
import compression from 'compression'
import favicon from 'express-favicon'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import { customLogger, swaggerWr } from './lib/function.js'
import resetLimitsCron from './lib/resetLimitsCron.js'
import apiR from './routes/apiRouter.js'
import authRoutes from './routes/authRoutes.js'
import routerDocs from './routes/docsRouter.js'
import verifyRoutes from './routes/verifyRoutes.js'
import R404 from './views/error.js'
import helloRouter from './views/home.js'
const currentDirectory = path.dirname(new URL(import.meta.url).pathname)
const app = express()
resetLimitsCron()
if (process.env.NODE_ENV === 'development') {
  swaggerWr()
  app.use(customLogger)
}
app.use(favicon(path.join(currentDirectory,'views','pages','assets','img','android-chrome-512x512.png')))
app.use(cors())
app.set('trust proxy', 1)
app.use(compression())
app.enable('trust proxy')
app.set('json spaces', 2)
app.use(routerDocs)
app.use(helmet())
app.use('/', helloRouter, verifyRoutes, apiR, authRoutes)
app.use(R404)
export default app