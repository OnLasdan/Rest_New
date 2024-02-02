import express from 'express';
import moment from 'moment-timezone';

const apiR = express.Router();

let __path = process.cwd();

apiR.get('/runtime', (req, res) => {
   const uptime = process.uptime();
   res.json({ uptime: uptime });
});

apiR.get('/clock', (req, res) => {
   const getCurrentTime = () => {
      const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss');
      const witaTime = moment().tz('Asia/Makassar').format('HH:mm:ss');
      const witTime = moment().tz('Asia/Jayapura').format('HH:mm:ss');

      return {
         wib: wibTime,
         wita: witaTime,
         wit: witTime
      };
   };

   function formatTime(time) {
      const h = set(time.hours());
      const m = set(time.minutes());
      const s = set(time.seconds());
      return `${h}:${m}:${s}`;
   }

   function set(val) {
      return val < 10 ? '0' + val : val;
   }

   // Send the initial response
   res.json(getCurrentTime());

   const intervalId = setInterval(() => {
      res.json(getCurrentTime());
   }, 1000);

   // Optionally, 
   res.on('close', () => {
      clearInterval(intervalId);
   });
});

export default apiR;
