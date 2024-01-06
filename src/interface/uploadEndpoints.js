const uploadEndpoints = {
    "/api/upload/cdn": {
      "post": {
        "summary": "Upload a file to the CDN.",
        "tags": ["Uploader"],
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "apiKey": {
                    "type": "string"
                  },
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "File successfully uploaded.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string"
                    },
                    "code": {
                      "type": "integer"
                    },
                    "author": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request - No file uploaded."
          },
          "401": {
            "description": "Unauthorized - Invalid API key."
          },
          "500": {
            "description": "Internal Server Error."
          }
        },
        "security": [
          {
            "ApiKeyAuth": []
          }
        ]
      }
    }
  

};

module.exports = uploadEndpoints