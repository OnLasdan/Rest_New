import axios from 'axios'
import cheerio from 'cheerio'

async function komikindogetch(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const hasil = []
        $('#chapter_list > ul > li').each(async function (a, b) {
          const result = {
            status: 200,
            author,
            title: $(b).find('> span.lchx > a').attr('href'),
            get_url: $(b).find('> span.lchx > a').text(),
          }
          hasil.push(result)
        })
        resolve(hasil)
      })
      .catch(reject)
  })
}
export default komikindogetch
