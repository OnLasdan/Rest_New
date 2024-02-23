const uploadEndpoints = {
  '/api/upload/cdn': {
    post: {
      tags: ['Uploader'],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                file: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'File successfully uploaded.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                  },
                  code: {
                    type: 'integer',
                  },
                  author: {
                    type: 'string',
                  },
                  data: {
                    type: 'object',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request - No file uploaded.',
        },
        401: {
          description: 'Unauthorized - Invalid API key.',
        },
        500: {
          description: 'Internal Server Error.',
        },
      },
      security: [
        {
          ApiKeyAuth: [],
        },
      ],
    },
  },
  '/api/upload/upload': {
    post: {
      tags: ['Uploader'],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                file: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  url: {
                    type: 'string',
                    description: 'URL of the uploaded file',
                  },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
        },
      },
    },
  },
}

export default uploadEndpoints
