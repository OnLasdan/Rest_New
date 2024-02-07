const toolsEndpoints = {
  "/api/tools/translate": {
    "get": {
      "tags": ["Tools"],
      "parameters": [
        {
          "name": "lang",
          "in": "query",
          "description": "Target language code",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text to be translated",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful translation",
          "content": {
            "application/json": {
              "example": {
                "translation": "Translated text"
              }
            }
          }
        },
        "400": {
          "description": "Bad Request",
          "content": {
            "application/json": {
              "example": {
                "error": "Invalid parameters. Both lang and text are required."
              }
            }
          }
        },
        "500": {
          "description": "Internal Server Error",
          "content": {
            "application/json": {
              "example": {
                "error": "Internal server error."
              }
            }
          }
        }
      }
    }
  },
  "/api/tools/langList": {
    "get": {
      "tags": ["Tools"],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "application/json": {
              "example": {
                "languages": ["en", "es", "fr"]
              }
            }
          }
        },
        "500": {
          "description": "Internal Server Error",
          "content": {
            "application/json": {
              "example": {
                "error": "Internal server error."
              }
            }
          }
        }
      }
    }
  }
}
export default toolsEndpoints;