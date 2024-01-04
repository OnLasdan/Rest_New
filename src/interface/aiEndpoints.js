const aiEndpoints = {
  "/api/ai/bard": {
    "get": {
      "summary": "bard ai api",
      "description": "communication with bard ai",
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
  "/api/ai/bingimage": {
    "get": {
      "summary": "bard ai api",
      "description": "communication with bard ai",
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
      "summary": "bard ai api",
      "description": "communication with bard ai",
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
      "summary": "bard ai api",
      "description": "communication with bard ai",
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
      "summary": "bard ai api",
      "description": "communication with bard ai",
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
        "summary": "Get anime image from URL",
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

  // ... tambahkan endpoint ai lainnya


  
};
//test chokidar function 
// added watchFile function 
module.exports = aiEndpoints