const express = require('express');
const fs = require('fs');
const request = require('request');
const apiR = express();
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');

let currentIndex = 0;
__path = process.cwd();
const author = 'xyla';
apiR.get('/runtime', (req, res) => {
  const uptime = process.uptime();
  res.json({ uptime: uptime });
});
const moment = require('moment-timezone');

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

  // Set up the interval to update the time every second
  const intervalId = setInterval(() => {
    res.json(getCurrentTime());
  }, 1000);

  // Optionally, you may want to clear the interval when the client disconnects
  res.on('close', () => {
    clearInterval(intervalId);
  });
});
module.exports = apiR;
