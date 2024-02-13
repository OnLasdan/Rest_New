import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let no = 1

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
async function nhentaisearch(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://nhentai.to/search?q=${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const hasil = []
        $('body > div.container.index-container > div').each(
          async function (a, b) {
            const result = {
              author: '©lui',
              status: 200,
              index: `${no++}`,
              link: 'https://nhentai.to' + $(b).find('> a').attr('href'),
              thumb: $(b).find('> a > img:nth-child(2)').attr('src'),
              title: $(b).find('> a > div').text(),
            }
            hasil.push(result)
          }
        )
        resolve(hasil)
      })
      .catch(reject)
  })
}

async function nekopoilatest() {
  try {
    const response = await fetch('https://nekopoi.care/')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.text()
    const $ = cheerio.load(data)
    const hasil = []

    $('#boxid > div').each(function (a, b) {
      const result = {
        title: $(b).find('> div.eroinfo > h2 > a').text(),
        epsd_url: $(b).find('> div.eroinfo > h2 > a').attr('href'),
        thumb: $(b).find('> div.eroimg > div > img').attr('src'),
        up_date: $(b).find('> div.eroinfo > span:nth-child(2)').text(),
        url: $(b).find('> div.eroinfo > span:nth-child(3) > a').attr('href'),
      }
      hasil.push(result)
    })

    return hasil
  } catch (error) {
    throw error
  }
}

async function nkpepsddl(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const hasil = []
        $(
          '#content > div.postsbody > div > div.arealinker > div.boxdownload > div'
        ).each(async function (a, b) {
          const dati = {
            Drop: $(b).find('> div.listlink > p > a:nth-child(1)').attr('href'),
            Slare: $(b)
              .find('> div.listlink > p > a:nth-child(2)')
              .attr('href'),
            StreamSB: $(b)
              .find('> div.listlink > p > a:nth-child(2)')
              .attr('href'),
            Dood: $(b).find('> div.listlink > p > a:nth-child(3)').attr('href'),
            Racaty: $(b)
              .find('> div.listlink > p > a:nth-child(4)')
              .attr('href'),
            ZippyShare: $(b)
              .find('> div.listlink > p > a:nth-child(5)')
              .attr('href'),
          }
          hasil.push(dati)
        })
        resolve(hasil)
      })
      .catch(reject)
  })
}
async function dojindsgetimg(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data)
        const hasil = []
        $('#anu > img').each(async function (a, b) {
          hasil.push($(b).attr('src'))
        })
        resolve(hasil)
      })
      .catch(reject)
  })
}

export {
  dojindsgetimg, komikindogetch, nekopoilatest,
  nhentaisearch, nkpepsddl
}

