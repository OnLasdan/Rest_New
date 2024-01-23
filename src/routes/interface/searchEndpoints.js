const searchEndpoints = {
  "/api/search/youtube": {
    "get": {
      "tags": ["Search"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "query",
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
      "tags": ["Search"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "query",
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
export default searchEndpoints 