const searchEndpoints = {
  "/api/search/youtube": {
    "get": {
      "summary": "Search YouTube content",
      "description": "Search YouTube content using the provided query.",
      "tags": ["Search"],
      "parameters": [
        {
          "in": "query",
          "name": "url",
          "required": true,
          "description": "The URL of the TikTok content to download.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with downloaded YouTube content.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "string" },
                  "code": { "type": "integer" },
                  "author": { "type": "string" },
                  "data": { "type": "object" }
                }
              },
              "example": {
                "status": "Success",
                "code": 200,
                "author": "xyla",
                "data": {}
              }
            }
          }
        }
      }
    }
  },
  "/api/search/xnxx": {
    "get": {
      "summary": "Search YouTube content",
      "description": "Search YouTube content using the provided query.",
      "tags": ["Search"],
      "parameters": [
        {
          "in": "query",
          "name": "url",
          "required": true,
          "description": "The URL of the TikTok content to download.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with downloaded YouTube content.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": { "type": "string" },
                  "code": { "type": "integer" },
                  "author": { "type": "string" },
                  "data": { "type": "object" }
                }
              },
              "example": {
                "status": "Success",
                "code": 200,
                "author": "xyla",
                "data": {}
              }
            }
          }
        }
      }
    }
  }
  // ... tambahkan endpoint search lainnya
};
module.exports = searchEndpoints