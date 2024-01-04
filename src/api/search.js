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
apiR.get('/youtube', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    scrape.search.youtube(query)
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

apiR.get('/xnxx', async (req, res, next) => {
	const query = req.query.q
	if (!query) return res.json(msg.paramquery)
    scrape.downloader.download.xnxxSearch(query)
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
