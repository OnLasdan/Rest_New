import axios from "axios";
import cheerio from "cheerio";
import fetch from "node-fetch";
import moment from "moment-timezone";
import mimetype from "mime-types";
import qs from "qs";

async function pinterestvideodownloader(t) {
  return new Promise(async (e, a) => {
    let i = new URLSearchParams();
    i.append("url", t);
    let o = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: i,
      })
    ).text();
    $ = cheerio.load(o);
    let r = [];
    if (
      ($("table > tbody > tr").each(function (t, e) {
        "" != $($(e).find("td")[0]).text() &&
          r.push({ url: $($(e).find("td")[0]).find("a").attr("href") });
      }),
      0 == r.length)
    )
      return e({ status: !1 });
    e({ status: !0, data: r });
  });
}

async function mediafires(t) {
  const e = await axios.get(t),
    a = cheerio.load(e.data),
    i = [],
    o = a("a#downloadButton").attr("href"),
    r = a("a#downloadButton")
      .text()
      .replace("Download", "")
      .replace("(", "")
      .replace(")", "")
      .replace("\n", "")
      .replace("\n", "")
      .trim(),
    n = o.split("/")[5];
  return (
    (mime = n.split(".")),
    (mime = mimetype.lookup(mime[1])),
    i.push({ nama: n, mime: mime, size: r, link: o }),
    i[0]
  );
}

async function facebook(t) {
  return new Promise(async (e, a) => {
    const i = await fetch("https://www.getfvid.com/downloader", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: "https://www.getfvid.com/",
        },
        body: new URLSearchParams(Object.entries({ url: t })),
      }),
      o = cheerio.load(await i.text());
    e({
      result: {
        url: t,
        title: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a",
        ).text(),
        time: o("#time").text(),
        hd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a",
        ).attr("href"),
        sd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a",
        ).attr("href"),
        audio: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a",
        ).attr("href"),
      },
    });
  });
}

async function shortlink(t) {
  return (
    await axios.get(
      "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(t),
    )
  ).data;
}

async function xnxxSearch(t) {
  return new Promise((n, e) => {
    const r = "https://www.xnxx.com";
    fetch(`${r}/search/${t}/${Math.floor(3 * Math.random()) + 1}`, {
      method: "get",
    })
      .then((t) => t.text())
      .then((t) => {
        let e = cheerio.load(t, { xmlMode: !1 }),
          o = [],
          a = [],
          i = [],
          s = [];
        e("div.mozaique").each(function (t, n) {
          e(n)
            .find("div.thumb")
            .each(function (t, n) {
              a.push(
                r + e(n).find("a").attr("href").replace("/THUMBNUM/", "/"),
              );
            });
        }),
          e("div.mozaique").each(function (t, n) {
            e(n)
              .find("div.thumb-under")
              .each(function (t, n) {
                i.push(e(n).find("p.metadata").text()),
                  e(n)
                    .find("a")
                    .each(function (t, n) {
                      o.push(e(n).attr("title"));
                    });
              });
          });
        for (let t = 0; t < o.length; t++)
          s.push({ title: o[t], info: i[t], link: a[t] });
        n({ status: !0, result: s });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}

async function xnxxDownloader(t) {
  return new Promise((n, e) => {
    fetch(`${t}`, { method: "get" })
      .then((t) => t.text())
      .then((e) => {
        let r = cheerio.load(e, { xmlMode: !1 });
        const o = r('meta[property="og:title"]').attr("content"),
          a = r('meta[property="og:duration"]').attr("content"),
          i = r('meta[property="og:image"]').attr("content"),
          s = r('meta[property="og:video:type"]').attr("content"),
          c = r('meta[property="og:video:width"]').attr("content"),
          u = r('meta[property="og:video:height"]').attr("content"),
          f = r("span.metadata").text().trim(),
          l = r("#video-player-bg > script:nth-child(6)").html(),
          m = {
            low: (l.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
            high: l.match("html5player.setVideoUrlHigh\\('(.*?)'\\);")[1],
            HLS: l.match("html5player.setVideoHLS\\('(.*?)'\\);")[1],
            thumb: l.match("html5player.setThumbUrl\\('(.*?)'\\);")[1],
            thumb69: l.match("html5player.setThumbUrl169\\('(.*?)'\\);")[1],
            thumbSlide: l.match("html5player.setThumbSlide\\('(.*?)'\\);")[1],
            thumbSlideBig: l.match(
              "html5player.setThumbSlideBig\\('(.*?)'\\);",
            )[1],
          };
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
        });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}
async function doujindesusearch(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://doujindesu.tv/?s=${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("#archives > div > article").each(async function (a, b) {
          let result = {
            link: "https://doujindesu.tv" + $(b).find("> a").attr("href"),
            thumb: $(b).find("> a > figure > img").attr("src"),
            title: $(b).find("> a > figure > img").attr("title"),
            type: $(b).find("> a > figure > span").text(),
            status: $(b).find("> a > div > div.status").text(),
            score: $(b).find("> a > div > div.score").text(),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}
async function doujindesuch(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("#chapter_list > ul > li").each(async function (a, b) {
          let result = {
            title: $(b).find("> div.chright > span > a").attr("title"),
            url: $(b).find("> div.chright > span > a").attr("href"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}
async function doujindesulatest() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://doujindesu.tv`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("#archives > div > article").each(async function (a, b) {
          let result = {
            title: $(b).find("> a").attr("title"),
            link: "https://doujindesu.tv" + $(b).find("> a").attr("href"),
            info: $(b).find("div > div > a > span").text(),
            type: $(b).find("> a > figure > span").text(),
            thumb: $(b).find("> a > figure > img").attr("src"),
          };
          hasil.push(result);
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

async function hentai() {
  return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 1153);
    axios.get("https://sfmcompile.club/page/" + page).then((data) => {
      const $ = cheerio.load(data.data);
      const hasil = [];
      $("#primary > div > div > ul > li > article").each(async function (a, b) {
        hasil.push({
          title: $(b).find("header > h2").text(),
          link: $(b).find("header > h2 > a").attr("href"),
          category: $(b)
            .find("header > div.entry-before-title > span > span")
            .text()
            .replace("in ", ""),
          share_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-shares")
            .text(),
          views_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-views")
            .text(),
          type: $(b).find("source").attr("type") || "image/jpeg",
          video_1:
            $(b).find("source").attr("src") ||
            $(b).find("img").attr("data-src"),
          video_2: $(b).find("video > a").attr("href") || "",
        });
      });
      resolve(hasil);
    });
  });
}

async function ssweb(url, device = "desktop") {
  return new Promise((resolve, reject) => {
    const base = "https://www.screenshotmachine.com";
    const param = {
      url: url,
      device: device,
      full: true,
      cacheLimit: 0,
    };
    axios({
      url: base + "/capture.php",
      method: "POST",
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((data) => {
        const cookies = data.headers["set-cookie"];
        if (data.data.status == "success") {
          axios
            .get(base + "/" + data.data.link, {
              headers: {
                cookie: cookies.join(""),
              },
              responseType: "arraybuffer",
            })
            .then(({ data }) => {
              let result = {
                status: 200,
                author: author,
                result: data,
              };
              resolve(result);
            });
        } else {
          reject({ status: 404, author: author, message: data.data });
        }
      })
      .catch(reject);
  });
}
export {
  xnxxSearch,
  pinterestvideodownloader,
  mediafires,
  facebook,
  shortlink,
  xnxxDownloader,
  doujindesusearch,
  doujindesuch,
  doujindesulatest,
  hentai,
  ssweb,
};
