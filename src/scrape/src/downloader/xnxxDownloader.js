import cheerio from 'cheerio'
import fetch from 'node-fetch'

async function xnxxDownloader(t) {
  return new Promise((n, e) => {
    fetch(`${t}`, { method: 'get' })
      .then((t) => t.text())
      .then((e) => {
        const r = cheerio.load(e, { xmlMode: !1 })
        const o = r('meta[property="og:title"]').attr('content')
        const a = r('meta[property="og:duration"]').attr('content')
        const i = r('meta[property="og:image"]').attr('content')
        const s = r('meta[property="og:video:type"]').attr('content')
        const c = r('meta[property="og:video:width"]').attr('content')
        const u = r('meta[property="og:video:height"]').attr('content')
        const f = r('span.metadata').text().trim()
        const l = r('#video-player-bg > script:nth-child(6)').html()
        const m = {
          low: (l.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
          high: l.match("html5player.setVideoUrlHigh\\('(.*?)'\\);")[1],
          HLS: l.match("html5player.setVideoHLS\\('(.*?)'\\);")[1],
          thumb: l.match("html5player.setThumbUrl\\('(.*?)'\\);")[1],
          thumb69: l.match("html5player.setThumbUrl169\\('(.*?)'\\);")[1],
          thumbSlide: l.match("html5player.setThumbSlide\\('(.*?)'\\);")[1],
          thumbSlideBig: l.match(
            "html5player.setThumbSlideBig\\('(.*?)'\\);"
          )[1],
        }
        n({
          status: !0,
          title: o,
          URL: t,
          duration: a,
          image: i,
          videoType: s,
          videoWidth: c,
          videoHeight: u,
          info: f,
          files: m,
        })
      })
      .catch((t) => e({ status: !1, result: t }))
  })
}
export default xnxxDownloader
