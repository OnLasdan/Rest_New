const uploadEndpoints = {
  "/api/upload/cdn": {
    "post": {
      "summary": "Upload a file to Discord",
      "tags": ["Uploader"],
      "parameters": [
        {
          "in": "query",
          "name": "file",
          "description": "The file to upload",
          "schema": {
            "type": "string",
            "format": "binary"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "File uploaded successfully",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": { "type": "string", "description": "Success message" },
                  "result": { "type": "object", "description": "Result from Discord upload" }
                }
              }
            }
          }
        },
        "400": {
          "description": "No file uploaded or file size exceeds the limit"
        }
      }
    }
  }
  // ... tambahkan endpoint upload lainnya
};

module.exports = uploadEndpoints