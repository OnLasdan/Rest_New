function createRandomEndpoint() {
  return {
    get: {
      tags: ['Random'],
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
}

const countries = [
  'china',
  'indonesia',
  'japan',
  'korean',
  'vietnam',
  'random',
  'thailand',
  'malaysia',
  'potatogodzilla',
  'belledelphine',
  'mayvisalycevip',
  'nude',
  'imsadspice',
  'naughty',
  'jkt48',
]

const randomEndpoints = {}
countries.forEach((country) => {
  randomEndpoints[`/api/random/${country}`] = createRandomEndpoint()
})

export default randomEndpoints
