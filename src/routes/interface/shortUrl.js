const shortUrlEnpoints = {
  '/api/shortUrl/isgd': {
    get: {
      tags: ['ShortUrl'],
      parameters: [
        {
          name: 'url',
          in: 'query',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'The URL to be shortened',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                status: 'Success',
                code: 200,
                author: 'Xyla',
                data: 'https://shortened-url.com',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
          content: {
            'application/json': {
              example: {
                error: 'url is required.',
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              example: {
                error: 'Internal server error.',
              },
            },
          },
        },
      },
    },
  },
  '/api/shortUrl/tiny': {
    get: {
      tags: ['ShortUrl'],
      parameters: [
        {
          name: 'url',
          in: 'query',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'The URL to be shortened',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                status: 'Success',
                code: 200,
                author: 'Xyla',
                data: 'https://shortened-url.com',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
          content: {
            'application/json': {
              example: {
                error: 'url is required.',
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              example: {
                error: 'Internal server error.',
              },
            },
          },
        },
      },
    },
  },
  '/api/shortUrl/vurl': {
    get: {
      tags: ['ShortUrl'],
      parameters: [
        {
          name: 'url',
          in: 'query',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'The URL to be shortened',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                status: 'Success',
                code: 200,
                author: 'Xyla',
                data: 'https://shortened-url.com',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
          content: {
            'application/json': {
              example: {
                error: 'url is required.',
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              example: {
                error: 'Internal server error.',
              },
            },
          },
        },
      },
    },
  },
  '/api/shortUrl/vgd': {
    get: {
      tags: ['ShortUrl'],
      parameters: [
        {
          name: 'url',
          in: 'query',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'The URL to be shortened',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                status: 'Success',
                code: 200,
                author: 'Xyla',
                data: 'https://shortened-url.com',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
          content: {
            'application/json': {
              example: {
                error: 'url is required.',
              },
            },
          },
        },
        500: {
          description: 'Internal server error',
          content: {
            'application/json': {
              example: {
                error: 'Internal server error.',
              },
            },
          },
        },
      },
    },
  },
}
export default shortUrlEnpoints
