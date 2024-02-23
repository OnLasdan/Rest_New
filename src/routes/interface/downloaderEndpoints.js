const downloaderEndpoints = ['tiktok', 'facebook', 'xnxx', 'mediafire']

const generateEndpoint = (endpoint) => ({
  [`/api/downloader/${endpoint}`]: {
    get: {
      tags: ['Downloader'],
      parameters: [
        {
          in: 'query',
          name: 'url',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: { type: 'string' },
                  code: { type: 'integer' },
                  author: { type: 'string' },
                  data: { type: 'object' },
                },
              },
              example: {
                status: 'Success',
                code: 200,
                author: 'xyla',
                data: {},
              },
            },
          },
        },
      },
    },
  },
})

const downloaderEndpointsObject = Object.assign(
  {},
  ...downloaderEndpoints.map((endpoint) => generateEndpoint(endpoint))
)

export default downloaderEndpointsObject
