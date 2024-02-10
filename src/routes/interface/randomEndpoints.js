const randomEndpoints = {
  "/api/random/china": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/indonesia": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/japan": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/korean": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/vietnam": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/random": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/thailand": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/malaysia": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  "/api/random/potatogodzilla": {
    get: {
      tags: ["Random"],
      responses: {
        200: {
          description: "Successfully retrieved a random image.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "Success",
                  },
                  code: {
                    type: "integer",
                    example: 200,
                  },
                  author: {
                    type: "string",
                    example: "Xyla",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "https://example.com/image.jpg",
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
  // ... tambahkan endpoint random lainnya
};
export default randomEndpoints;
