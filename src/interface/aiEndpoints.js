const aiEndpoints = {
  "/api/ai/bard": {
    "get": {
      "summary": "Bard AI API",
      "description": "Communication with the Bard AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
  "/api/ai/blackbox": {
    "get": {
      "summary": "Blackbox Chat API",
      "description": "Communication with the Blackbox AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
                "author": "iky",
                "data": {}
              }
            }
          }
        }
      }
    }
  },
  "/api/ai/bingimage": {
    "get": {
      "summary": "Bing Creator API",
      "description": "Communication with the Bing AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
  "/api/ai/gptonline": {
    "get": {
      "summary": "GPT Online API",
      "description": "Communication with the GPT Online AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
  "/api/ai/azure": {
    "get": {
      "summary": "Azure AI API",
      "description": "Communication with the Azure AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
  "/api/ai/deepenglish": {
    "get": {
      "summary": "Deep English AI API",
      "description": "Communication with the Deep English AI service.",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "q",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response with search results.",
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
  "/api/ai/toanime": {
    "get": {
      "summary": "Get Anime Image from URL",
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "url",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "URL of the anime image"
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "image/png": {
              "schema": {
                "type": "string",
                "format": "binary"
              }
            }
          }
        },
        "400": {
          "description": "Bad request, missing or invalid parameters",
          "content": {
            "application/json": {
              "example": {
                "message": "Invalid or missing 'url' parameter"
              }
            }
          }
        },
        "500": {
          "description": "Internal server error",
          "content": {
            "application/json": {
              "example": {
                "error": "Internal Server Error"
              }
            }
          }
        }
      }
    }
  }

  // ... tambahkan endpoint AI lainnya 

};
// Test chokidar function 
// Added watchFile function 
module.exports = aiEndpoints;
