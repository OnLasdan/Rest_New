const toolsEndpoints = {
  '/api/tools/translate': {
    get: {
      tags: ['Tools'],
      parameters: [
        {
          name: 'lang',
          in: 'query',
          description: 'Target language code',
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          name: 'text',
          in: 'query',
          description: 'Text to be translated',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Successful translation',
          content: {
            'application/json': {
              example: {
                translation: 'Translated text',
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              example: {
                error: 'Invalid parameters. Both lang and text are required.',
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
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
  '/api/tools/langList': {
    get: {
      tags: ['Tools'],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                languages: ['en', 'es', 'fr'],
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
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
  '/api/tools/nekopoi-letest': {
    get: {
      tags: ['Tools'],
      responses: {
        200: {
          description: 'Successfully retrieved response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'Success',
                  },
                  code: {
                    type: 'integer',
                    example: 200,
                  },
                  author: {
                    type: 'string',
                    example: 'Xyla',
                  },
                  data: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/api/tools/anti-porn': {
    get: {
      tags: ['Tools'],
      parameters: [
        {
          name: 'url',
          in: 'query',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'URL of the image to be checked',
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                nsfw: false,
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              example: {
                error: 'Parameter url not found',
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              example: {
                error: 'Internal server error',
              },
            },
          },
        },
      },
    },
  },
}
export default toolsEndpoints
