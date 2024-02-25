import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const apiR = express.Router()
apiR.use(cors())

const routeModules = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith('.js') && file !== 'router.js')
  .map((file) => file.replace('.js', ''))

const importRoutes = async (routeModule) => {
  try {
    const routes = await import(`./${routeModule}.js`)
    if (routes.default && typeof routes.default === 'function') {
      apiR.use(`/api/${routeModule}`, routes.default)
    } else {
      console.error(
        `Error importing routes from ${routeModule}: Invalid middleware.`
      )
    }
  } catch (error) {
    console.error(`Error importing routes from ${routeModule}:`, error)
  }
}

for (const routeModule of routeModules) {
  importRoutes(routeModule)
}

export default apiR
