require('../../lib/message');
const express = require( 'express' );
const fs = require( 'fs' );
const request = require( 'request' )
const apiR = express( );
let currentIndex = 0;
__path = process.cwd( );
const author = 'xyla'
const {
    fetchJson,
    getBuffer
} = require('../../lib/function');
const scrape = require('../../scrape/index');
apiR.get('/tiktok', async (req, res, next) => {
  const url = req.query.url;
  if (!url) return res.json(msg.paramurl);
  xorizn = await fetchJson(`https://xorizn-downloads.vercel.app/api/downloads/tiktok?url=${url}`)
    .then(data => {
      let aneh = data.result;
      if (!aneh) return res.json(msg.nodata);
      res.status(200).json({
        status: "Success",
        code: 200,
        author: "Xyla",
        data: aneh
      });
    });
});
apiR.get( '/mediafire', async ( req, res, next ) => {
  let url = req.query.url
  if ( !url ) return res.json( msg.paramurl )
  scrape.downloader.mediafire( url )
    .then( data => {
      let result = data;
      if ( !result ) res.json( msg.nodata )
      res.json( {
        status: "Success",
        code: 200,
        author: author,
        data: result
      } )
    } )
} )
apiR.get('/sfilemobi', async (req, res, next) => {
  let url = req.query.url
  if (!url) return res.json(msg.paramurl)
    scrape.downloader.sfilemobi(url)
  .then(data => {
    let result = data;
    if (!result) res.json(msg.nodata)
    res.json({
      status: "Success",
      code: 200,
      author: author,
      data: result
    })
  })
})







module.exports = apiR
