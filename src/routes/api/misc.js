import express from 'express'
import moment from 'moment-timezone'

const apiR = express.Router()
const __path = process.cwd()

apiR.get('/:endpoint', (req, res) => {
  const { endpoint } = req.params

  switch (endpoint) {
    case 'runtime':
      const uptime = process.uptime()
      res.json({ uptime })
      break

    case 'ip':
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
      console.log(ip)
      res.send({ ip })
      break

    case 'clock':
      const getCurrentTime = () => {
        const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        const witaTime = moment().tz('Asia/Makassar').format('HH:mm:ss')
        const witTime = moment().tz('Asia/Jayapura').format('HH:mm:ss')

        return {
          wib: wibTime,
          wita: witaTime,
          wit: witTime
        }
      }

      function formatTime (time) {
        const h = set(time.hours())
        const m = set(time.minutes())
        const s = set(time.seconds())
        return `${h}:${m}:${s}`
      }

      function set (val) {
        return val < 10 ? '0' + val : val
      }

      // Send the initial response
      res.json(getCurrentTime())

      const intervalId = setInterval(() => {
        res.json(getCurrentTime())
      }, 1000)

      // Optionally,
      res.on('close', () => {
        clearInterval(intervalId)
      })
      break

    default:
      res.json({ status: 'Error', code: 400, message: 'Invalid endpoint' })
  }
})

export default apiR
