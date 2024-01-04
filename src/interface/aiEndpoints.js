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
  }
  // ... tambahkan endpoint ai lainnya
};
//test chokidar function 
// added watchFile function 
module.exports = aiEndpoints