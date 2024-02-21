import { readdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function getAllEndpoints() {
  const interfacePath = join(__dirname, '../routes/interface')
  const jsFiles = readdirSync(interfacePath).filter((file) =>
    file.endsWith('.js')
  )
  const moduleImports = jsFiles.map(async (file) => {
    const module = await import(join(interfacePath, file))
    return module.default
  })
  return Promise.all(moduleImports)
}

/**
 * Bikin file JSON yang gabungin semua endpoint dari modul-modul.
 * @returns {Promise<Object>} - Promise dengan objek JSON hasil gabungan.
 */

async function generateCombinedJSON() {
  const mods = await getAllEndpoints()

  return {
    openapi: '3.0.0',
    info: {
      title: '.M.U.F.A.R. APIs',
      version: '1.1.11',
    },
    security: [
      {
        apiKey: [],
      },
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          in: 'query',
          name: 'apikey',
        },
      },
    },
    paths: {
      ...mods.reduce((acc, module) => {
        return {
          ...acc,
          ...module,
        }
      }, {}),
    },
  }
}

const combinedJSONPromise = generateCombinedJSON()

export default combinedJSONPromise
