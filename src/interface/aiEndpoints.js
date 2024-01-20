const aiEndpoints = {
  "/api/ai/bard": {
    "get": {
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
  "/api/ai/Pixart-A": {
    "get": {
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "prompt",
          "required": true,
          "description": "The search query.",
          "schema": {
            "type": "string"
          }
        },
        {
          "in": "query",
          "name": "style",
          "required": true,
          "description": "The style for the AI. Choose from: Cinematic, Photographic, Anime, Manga, Digital Art, Pixel art, Fantasy art, Neonpunk, 3D Model",
          "schema": {
            "type": "string",
            "enum": ["Cinematic", "Photographic", "Anime", "Manga", "Digital Art", "Pixel art", "Fantasy art", "Neonpunk", "3D Model"]
          }
        },
        {
          "in": "query",
          "name": "samplers",
          "required": true,
          "description": "The sampler for the AI. Choose from: DPM-Solver, SA-Solver",
          "schema": {
            "type": "string",
            "enum": ["DPM-Solver", "SA-Solver"]
          }
        },
        {
          "in": "query",
          "name": "width",
          "required": false,
          "description": "The width of the image.",
          "schema": {
            "type": "integer",
            "enum": [256, 512, 768, 1024, 1280, 1536, 1792, 2048],
            "default": 1024
          }
        },
        {
          "in": "query",
          "name": "height",
          "required": false,
          "description": "The height of the image.",
          "schema": {
            "type": "integer",
            "enum": [256, 512, 768, 1024, 1280, 1536, 1792, 2048],
            "default": 1024
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
  "/api/ai/toanime": {
    "get": {
      "tags": ["Ai"],
      "parameters": [
        {
          "in": "query",
          "name": "url",
          "required": true,
          "schema": {
            "type": "string"
          },
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
