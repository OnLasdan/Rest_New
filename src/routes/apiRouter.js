import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs/promises'

const currentDirectory = dirname(fileURLToPath(import.meta.url))
const apiR = express.Router()
apiR.use(cors())

const importRoutes = async (routeModule) => {
  try {
    const routes = await import(`./api/${routeModule}.js`)
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

try {
  const routeModules = await fs.readdir(path.join(currentDirectory, 'api'))
  for (const routeModule of routeModules.filter(
    (file) => file.endsWith('.js') && file !== 'router.js'
  )) {
    importRoutes(routeModule.replace('.js', ''))
  }
} catch (error) {
  console.error('Error reading route modules:', error)
}

export default apiR
