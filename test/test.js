import assert from 'assert';
import { describe, it } from 'mocha';
import request from 'supertest';
import app  from '../index.js';

describe('MUFAAR APIs', function () {
  const apiKey = 'cu02kxe7dj5';
  const endpoints = [
    { path: '/api/random/china' },
    { path: '/api/random/indonesia' },
    { path: '/api/random/japan' },
    { path: '/api/random/korean' },
    { path: '/api/random/vietnam' },
    { path: '/api/random/random' },
    { path: '/api/random/thailand' },
    { path: '/api/random/malaysia' },
    { path: '/api/random/potatogodzilla' },
    { path: '/api/search/youtube', query: 'q=koqlapo' },
    { path: '/api/search/xnxx', query: 'q=japan' },
  ];

  endpoints.forEach((endpoint) => {
    it(`should return 200 for ${endpoint.path}`, function (done) {
      this.timeout(5000); 

      request(app)
        .get(`${endpoint.path}?${endpoint.query}&apikey=${apiKey}`)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err); 
          } else {
            assert.strictEqual(res.status, 200);
            done(); 
          }
        });
    });
  });

  after(function () {
    console.log('Seluruh endpoint telah diuji. Pengujian dihentikan.');
    process.exit(0);
  });
});


