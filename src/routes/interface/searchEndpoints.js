const createSearchEndpoint = (paramName, description) => {
  return {
    get: {
      tags: ['Search'],
      parameters: [
        {
          in: 'query',
          name: paramName,
          required: true,
          description: `query for ${description}`,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Successful response',
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
  }
}

const searchEndpoints = {
  '/api/search/youtube': createSearchEndpoint(
    'q',
    'downloaded YouTube content'
  ),
  '/api/search/xnxx': createSearchEndpoint('q', 'response for Xnxx'),
  '/api/search/wikipedia': createSearchEndpoint('q', 'response for Wikipedia'),
  // ... tambahkan endpoint search lainnya
}

export default searchEndpoints
