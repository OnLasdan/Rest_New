const randomEndpoints = {
  "/api/random/china": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "security": [
        {
          "apiKey": [],
        },
      ],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string",
              },
            },
          },
        },
      },
    },
  },
  "/api/random/indonesia": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "security": [
        {
          "apiKey": [],
        },
      ],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string",
              },
            },
          },
        },
      },
    },
  },
  // ... tambahkan endpoint random lainnya
};

module.exports = randomEndpoints;
