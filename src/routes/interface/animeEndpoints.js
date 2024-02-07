const animeEndpoints = {
  "/api/anime/doujin-latest": {
    "get": {
      "tags": ["Anime"],
      "responses": {
        "200": {
          "description": "Successfully retrieved response",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "string",
                    "example": "Success"
                  },
                  "code": {
                    "type": "integer",
                    "example": 200
                  },
                  "author": {
                    "type": "string",
                    "example": "Xyla"
                  },
                  "data": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
      "/api/anime/doujin-search": {
        "get": {
          "tags": ["Anime"],
          "parameters": [
            {
              "name": "q",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "URL for doujin search"
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "example": {
                    "status": "Success",
                    "code": 200,
                    "author": "nama_author", 
                    "data": "data_doujin"
                  }
                }
              }
            },
            "default": {
              "description": "Unexpected error",
              "content": {
                "application/json": {
                  "example": {
                    "status": "Error",
                    "code": 500,
                    "message": "Internal Server Error"
                  }
                }
              }
            }
          }
        }
      },
  "/api/anime/doujin-ch": {
    "get": {
      "tags": ["Anime"],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "URL for doujin search"
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "application/json": {
              "example": {
                "status": "Success",
                "code": 200,
                "author": "nama_author", 
                "data": "data_doujin"
              }
            }
          }
        },
        "default": {
          "description": "Unexpected error",
          "content": {
            "application/json": {
              "example": {
                "status": "Error",
                "code": 500,
                "message": "Internal Server Error"
              }
            }
          }
        }
      }
    }
  },
  "/api/anime/doujin-img": {
    "get": {
      "tags": ["Anime"],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "URL doujin get image"
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "application/json": {
              "example": {
                "status": "Success",
                "code": 200,
                "author": "nama_author", 
                "data": "data_doujin"
              }
            }
          }
        },
        "default": {
          "description": "Unexpected error",
          "content": {
            "application/json": {
              "example": {
                "status": "Error",
                "code": 500,
                "message": "Internal Server Error"
              }
            }
          }
        }
      }
    }
  },
  "/api/anime/hentai": {
    "get": {
      "tags": ["Anime"],
      "responses": {
        "200": {
          "description": "Successfully response.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "string",
                    "example": "Success"
                  },
                  "code": {
                    "type": "integer",
                    "example": 200
                  },
                  "author": {
                    "type": "string",
                    "example": "Xyla"
                  },
                  "data": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/api/anime/whatanime": {
    "get": {
    "tags": ["Anime"],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "URL of the image or video frame",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "application/json": {
              "example": {
              }
            }
          }
        },
        "400": {
          "description": "Bad Request",
          "content": {
            "application/json": {
              "example": {
                "error": "Invalid parameters. URL is required."
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
  "/api/anime/nhentai-search": {
    "get": {
    "tags": ["Anime"],
      "parameters": [
        {
          "name": "q",
          "in": "query",
          "description": "q of the image or video frame",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Successful response",
          "content": {
            "application/json": {
              "example": {
              }
            }
          }
        },
        "400": {
          "description": "Bad Request",
          "content": {
            "application/json": {
              "example": {
                "error": "Invalid parameters. URL is required."
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
};
export default animeEndpoints;
