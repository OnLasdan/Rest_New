const endpoints = [
  'akira',
  'elaina',
  'miku',
  'shota',
  'anna',
  'ikuyo',
  'neko',
  'takina',
  'asuna',
  'kaela',
  'rias',
  'waifu',
  'sakura',
  'kaguya',
  'ayanokouji',
  'yotsuba',
  'ayuzawa',
  'kaori',
  'sasuke',
  'yumeko',
  'bocchi',
  'kobo',
  'chisato',
  'kotori',
  'shinka',
  'cosplay',
  'loli',
  'shizuka',
]

const sfwEndpoints = {}

endpoints.forEach((endpoint) => {
  sfwEndpoints[`/api/sfw/${endpoint}`] = {
    get: {
      tags: ['Sfw'],
      responses: {
        200: {
          description: 'Successfully retrieved a random image.',
          content: {
            'image/*': {
              example: 'https://example.com/image.jpg',
            },
          },
        },
      },
    },
  }
})

export default sfwEndpoints
