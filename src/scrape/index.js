import * as komik from './src/komik/index.js'
import * as downloader from './src/downloader/index.js'
import * as search from './src/search/index.js'
import * as tools from './src/tools/index.js'
import * as anime from './src/anime/index.js'
import * as coomer from './src/coomer/index.js'
import * as maker from './src/maker/index.js'

const scrape = {
  ...komik,
  ...downloader,
  ...search,
  ...tools,
  ...anime,
  ...coomer,
  ...maker,
}

export default scrape
