const randomEndpoints = {
  "/api/random/china": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/indonesia": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/japan": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/korean": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/vietnam": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/random": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/thailand": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/malaysia": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  },
  "/api/random/potatogodzilla": {
    "get": {
      "summary": "Get random image and video",
      "description": "Random image API",
      "tags": ["Random"],
      "responses": {
        "200": {
          "description": "Successfully retrieved the random image.",
          "content": {
            "image/png": {
              "schema": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
  // ... tambahkan endpoint random lainnya
};
module.exports = randomEndpoints