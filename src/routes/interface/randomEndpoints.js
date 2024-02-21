function createRandomEndpoint() {
  return {
    get: {
      tags: ['Random'],
      responses: {
        200: {
          description: 'Successfully retrieved a random image.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: 'string',
                  code: 'integer',
                  author: 'string',
                  data: {
                    type: 'array',
                    items: 'string',
                  },
                },
                example: {
                  status: 'Success',
                  code: 200,
                  author: 'Xyla',
                  data: ['https://example.com/image.jpg'],
                },
              },
            },
          },
        },
      },
    },
  };
}

const countries = ['china', 'indonesia', 'japan', 'korean', 'vietnam', 'random', 'thailand', 'malaysia', 'potatogodzilla'];

const randomEndpoints = {};

countries.forEach(country => {
  randomEndpoints[`/api/random/${country}`] = createRandomEndpoint();
});

export default randomEndpoints;
