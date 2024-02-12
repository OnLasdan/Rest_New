const userEndpoints = {
  '/api/auth/register': {
    post: {
      tags: ['User'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  format: 'email',
                },
                password: {
                  type: 'string',
                },
                username: {
                  type: 'string',
                },
                apiKey: {
                  type: 'string',
                },
              },
              required: ['email', 'password', 'username', 'apikey'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User registered successfully',
        },
        400: {
          description: 'Bad Request - Invalid input data',
        },
        500: {
          description: 'Internal Server Error',
        },
      },
    },
  },
  '/api/auth/profile': {
    get: {
      tags: ['User'],
      parameters: [
        {
          name: 'email',
          in: 'query',
          description: "User's email",
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          name: 'password',
          in: 'query',
          description: "User's password",
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Successfully retrieved user profile.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                  },
                  username: {
                    type: 'string',
                  },
                  limit: {
                    type: 'integer',
                  },
                  status: {
                    type: 'string',
                  },
                  apiKey: {
                    type: 'string',
                  },
                  isVerified: {
                    type: 'boolean',
                  },
                  token: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Invalid email or password.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default userEndpoints
