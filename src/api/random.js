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

apiR.get( '/random', async ( req, res, next ) => {
  let data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/random.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )

apiR.get( '/potatogodzilla', async ( req, res, next ) => {
  let data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/potatogodzilla.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )


apiR.get( '/china', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/china.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )

apiR.get( '/indonesia', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/indonesia.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )


apiR.get( '/japan', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/japan.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )


apiR.get( '/korean', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/korean.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )

apiR.get( '/malaysia', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/malaysia.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )


apiR.get( '/thailand', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/thailand.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )


apiR.get( '/vietnam', async ( req, res, next ) => {
  const data = JSON.parse( fs.readFileSync( __path + '/scrape/data/asupan/image/vietnam.json' ) );
  var result = data[ Math.floor( Math.random( ) * data.length ) ];
  var requestSettings = {
    url: result,
    method: 'GET',
    encoding: null
  };
  request( requestSettings, function( error, response, body ) {
    res.set( 'Content-Type', 'image/png' );
    res.send( body );
  } );
} )

module.exports = apiR
