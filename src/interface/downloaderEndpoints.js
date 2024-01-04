const downloaderEndpoints = {
  "/api/downloader/tiktok": {
    "get": {
      "summary": "Download TikTok content",
      "description": "Downloads TikTok content using the provided URL.",
      "tags": ["Downloader"],
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
          "description": "Successful response with downloaded TikTok content.",
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
  "/api/downloader/sfilemobi": {
    "get": {
      "summary": "Download TikTok content",
      "description": "Downloads TikTok content using the provided URL.",
      "tags": ["Downloader"],
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
          "description": "Successful response with downloaded TikTok content.",
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
  "/api/downloader/mediafire": {
    "get": {
      "summary": "Download TikTok content",
      "description": "Downloads TikTok content using the provided URL.",
      "tags": ["Downloader"],
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
          "description": "Successful response with downloaded TikTok content.",
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
  // ... tambahkan endpoint downloader lainnya
};
module.exports = downloaderEndpoints