import axios from 'axios'

async function ssweb(url, device = 'desktop') {
  return new Promise((resolve, reject) => {
    const base = 'https://www.screenshotmachine.com'
    const param = {
      url,
      device,
      full: true,
      cacheLimit: 0,
    }
    axios({
      url: base + '/capture.php',
      method: 'POST',
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
      .then((data) => {
        const cookies = data.headers['set-cookie']
        if (data.data.status == 'success') {
          axios
            .get(base + '/' + data.data.link, {
              headers: {
                cookie: cookies.join(''),
              },
              responseType: 'arraybuffer',
            })
            .then(({ data }) => {
              const result = {
                status: 200,
                author,
                result: data,
              }
              resolve(result)
            })
        } else {
          reject({ status: 404, author, message: data.data })
        }
      })
      .catch(reject)
  })
}
export default ssweb
