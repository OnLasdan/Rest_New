import axios from 'axios'
import cheerio from 'cheerio'
import mimetype from 'mime-types'

async function mediafires(t) {
  const e = await axios.get(t)
  const a = cheerio.load(e.data)
  const i = []
  const o = a('a#downloadButton').attr('href')
  const r = a('a#downloadButton')
    .text()
    .replace('Download', '')
    .replace('(', '')
    .replace(')', '')
    .replace('\n', '')
    .replace('\n', '')
    .trim()
  const n = o.split('/')[5]
  return (
    (mime = n.split('.')),
    (mime = mimetype.lookup(mime[1])),
    i.push({ nama: n, mime, size: r, link: o }),
    i[0]
  )
}
export default mediafires
