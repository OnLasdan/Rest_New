const downloaderEndpoints = {
  '/api/downloader/tiktok': {
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
  '/api/downloader/facebook': {
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
  '/api/downloader/xnxx': {
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
  '/api/downloader/mediafire': {
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
}
export default downloaderEndpoints
