import express from 'express'
import cors from 'cors'

const apiR = express.Router()
apiR.use(cors())

const routeModules = [
  'random',
  'downloader',
  'ai',
  'upload',
  'search',
  'misc',
  'sfw',
  'anime',
  'tools',
  'shortUrl'
]

routeModules.forEach(async (routeModule) => {
  const routes = await import(`./${routeModule}.js`)
  apiR.use(`/api/${routeModule}`, routes.default)
})
export default apiR
