
/**
 * @swagger
 * paths:
 *   /api/ai/bard:
 *     get:
 *       tags:
 *         - Ai
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: The search query.
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response with search results.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/ai/blackbox:
 *     get:
 *       tags:
 *         - Ai
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: The search query.
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response with search results.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: iky
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/ai/bingimage:
 *     get:
 *       tags:
 *         - Ai
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: The search query.
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response with search results.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/ai/Pixart-A:
 *     get:
 *       tags:
 *         - Ai
 *       parameters:
 *         - in: query
 *           name: prompt
 *           required: true
 *           description: The search query.
 *           schema:
 *             type: string
 *         - in: query
 *           name: style
 *           required: true
 *           description: >-
 *             The style for the AI. Choose from: Cinematic, Photographic, Anime,
 *             Manga, Digital Art, Pixel art, Fantasy art, Neonpunk, 3D Model
 *           schema:
 *             type: string
 *             enum:
 *               - Cinematic
 *               - Photographic
 *               - Anime
 *               - Manga
 *               - Digital Art
 *               - Pixel art
 *               - Fantasy art
 *               - Neonpunk
 *               - 3D Model
 *         - in: query
 *           name: samplers
 *           required: true
 *           description: 'The sampler for the AI. Choose from: DPM-Solver, SA-Solver'
 *           schema:
 *             type: string
 *             enum:
 *               - DPM-Solver
 *               - SA-Solver
 *         - in: query
 *           name: width
 *           required: false
 *           description: The width of the image.
 *           schema:
 *             type: integer
 *             enum:
 *               - 256
 *               - 512
 *               - 768
 *               - 1024
 *               - 1280
 *               - 1536
 *               - 1792
 *               - 2048
 *             default: 1024
 *         - in: query
 *           name: height
 *           required: false
 *           description: The height of the image.
 *           schema:
 *             type: integer
 *             enum:
 *               - 256
 *               - 512
 *               - 768
 *               - 1024
 *               - 1280
 *               - 1536
 *               - 1792
 *               - 2048
 *             default: 1024
 *       responses:
 *         '200':
 *           description: Successful response with search results.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: iky
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/ai/toanime:
 *     get:
 *       tags:
 *         - Ai
 *       parameters:
 *         - in: query
 *           name: url
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             image/png:
 *               schema:
 *                 type: string
 *                 format: binary
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/doujin-latest:
 *     get:
 *       tags:
 *         - Anime
 *       parameters: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/doujin-search:
 *     get:
 *       tags:
 *         - Anime
 *       parameters:
 *         - name: q
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: URL for doujin search
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/doujin-ch:
 *     get:
 *       tags:
 *         - Anime
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: URL for doujin search
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/doujin-img:
 *     get:
 *       tags:
 *         - Anime
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: URL doujin get image
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/hentai:
 *     get:
 *       tags:
 *         - Anime
 *       parameters: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/whatanime:
 *     get:
 *       tags:
 *         - Anime
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: URL of the image or video frame
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/anime/nhentai-search:
 *     get:
 *       tags:
 *         - Anime
 *       parameters:
 *         - name: q
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: q of the image or video frame
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: data_doujin
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               example:
 *                 status: Error
 *                 code: 500
 *                 message: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/downloader/tiktok:
 *     get:
 *       tags:
 *         - Downloader
 *       parameters:
 *         - in: query
 *           name: url
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/downloader/facebook:
 *     get:
 *       tags:
 *         - Downloader
 *       parameters:
 *         - in: query
 *           name: url
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/downloader/xnxx:
 *     get:
 *       tags:
 *         - Downloader
 *       parameters:
 *         - in: query
 *           name: url
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/downloader/mediafire:
 *     get:
 *       tags:
 *         - Downloader
 *       parameters:
 *         - in: query
 *           name: url
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/toanime:
 *     get:
 *       tags:
 *         - Maker
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           description: Parameter for toanime.
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Berhasil mengambil informasi.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/misc/runtime:
 *     get:
 *       tags:
 *         - Misc
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   uptime:
 *                     type: number
 *                     description: Application uptime in seconds
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/misc/clock:
 *     get:
 *       tags:
 *         - Misc
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   wib:
 *                     type: string
 *                     description: Current time in Waktu Indonesia Barat timezone
 *                   wita:
 *                     type: string
 *                     description: Current time in Waktu Indonesia Tengah timezone
 *                   wit:
 *                     type: string
 *                     description: Current time in Waktu Indonesia Timur timezone
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/china:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/indonesia:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/japan:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/korean:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/vietnam:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/random:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/thailand:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/malaysia:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/potatogodzilla:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/belledelphine:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/mayvisalycevip:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/nude:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/imsadspice:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/naughty:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/random/jkt48:
 *     get:
 *       tags:
 *         - Random
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/search/youtube:
 *     get:
 *       tags:
 *         - Search
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: query for downloaded YouTube content
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/search/xnxx:
 *     get:
 *       tags:
 *         - Search
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: query for response for Xnxx
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/search/wikipedia:
 *     get:
 *       tags:
 *         - Search
 *       parameters:
 *         - in: query
 *           name: q
 *           required: true
 *           description: query for response for Wikipedia
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: xyla
 *                 data: {}
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/akira:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/elaina:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/miku:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/shota:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/anna:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/ikuyo:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/neko:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/takina:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/asuna:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/kaela:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/rias:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/waifu:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/sakura:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/kaguya:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/ayanokouji:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/yotsuba:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/ayuzawa:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/kaori:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/sasuke:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/yumeko:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/bocchi:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/kobo:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/chisato:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/kotori:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/shinka:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/cosplay:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/loli:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/sfw/shizuka:
 *     get:
 *       tags:
 *         - Sfw
 *       responses:
 *         '200':
 *           description: Successfully retrieved a random image.
 *           content:
 *             image/*:
 *               example: https://example.com/image.jpg
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/shortUrl/isgd:
 *     get:
 *       tags:
 *         - ShortUrl
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: The URL to be shortened
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: https://shortened-url.com
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 error: url is required.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/shortUrl/tiny:
 *     get:
 *       tags:
 *         - ShortUrl
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: The URL to be shortened
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: https://shortened-url.com
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 error: url is required.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/shortUrl/vurl:
 *     get:
 *       tags:
 *         - ShortUrl
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: The URL to be shortened
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: https://shortened-url.com
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 error: url is required.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/shortUrl/vgd:
 *     get:
 *       tags:
 *         - ShortUrl
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: The URL to be shortened
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 status: Success
 *                 code: 200
 *                 author: Xyla
 *                 data: https://shortened-url.com
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 error: url is required.
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/tools/translate:
 *     get:
 *       tags:
 *         - Tools
 *       parameters:
 *         - name: lang
 *           in: query
 *           description: Target language code
 *           required: true
 *           schema:
 *             type: string
 *         - name: text
 *           in: query
 *           description: Text to be translated
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful translation
 *           content:
 *             application/json:
 *               example:
 *                 translation: Translated text
 *         '400':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid parameters. Both lang and text are required.
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/tools/langList:
 *     get:
 *       tags:
 *         - Tools
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 languages:
 *                   - en
 *                   - es
 *                   - fr
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error.
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/tools/nekopoi-letest:
 *     get:
 *       tags:
 *         - Tools
 *       responses:
 *         '200':
 *           description: Successfully retrieved response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: Success
 *                   code:
 *                     type: integer
 *                     example: 200
 *                   author:
 *                     type: string
 *                     example: Xyla
 *                   data:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: ''
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/tools/anti-porn:
 *     get:
 *       tags:
 *         - Tools
 *       parameters:
 *         - name: url
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *           description: URL of the image to be checked
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 nsfw: false
 *         '400':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               example:
 *                 error: Parameter url not found
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 error: Internal server error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/upload/cdn:
 *     post:
 *       tags:
 *         - Uploader
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '200':
 *           description: File successfully uploaded.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: integer
 *                   author:
 *                     type: string
 *                   data:
 *                     type: object
 *         '400':
 *           description: Bad Request - No file uploaded.
 *         '401':
 *           description: Unauthorized - Invalid API key.
 *         '500':
 *           description: Internal Server Error.
 *       security:
 *         - ApiKeyAuth: []
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/upload/upload:
 *     post:
 *       tags:
 *         - Uploader
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   url:
 *                     type: string
 *                     description: URL of the uploaded file
 *         '500':
 *           description: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/auth/register:
 *     post:
 *       tags:
 *         - User
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                 username:
 *                   type: string
 *                 apiKey:
 *                   type: string
 *               required:
 *                 - email
 *                 - password
 *                 - username
 *                 - apikey
 *       responses:
 *         '200':
 *           description: User registered successfully
 *         '400':
 *           description: Bad Request - Invalid input data
 *         '500':
 *           description: Internal Server Error
 * 
 */

/**
 * @swagger
 * paths:
 *   /api/auth/profile:
 *     get:
 *       tags:
 *         - User
 *       parameters:
 *         - name: email
 *           in: query
 *           description: User's email
 *           required: true
 *           schema:
 *             type: string
 *         - name: password
 *           in: query
 *           description: User's password
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successfully retrieved user profile.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   username:
 *                     type: string
 *                   limit:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   apiKey:
 *                     type: string
 *                   isVerified:
 *                     type: boolean
 *                   token:
 *                     type: string
 *         '400':
 *           description: Invalid email or password.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 * 
 */
