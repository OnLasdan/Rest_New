const miscEndpoints = {
  "/api/misc/runtime": {
    "get": {
      "tags": ["Misc"],
      "summary": "Get the runtime of the application",
      "description": "Returns the current uptime of the application",
      "responses": {
        "200": {
          "description": "Successful operation",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "uptime": {
                    "type": "number",
                    "description": "Application uptime in seconds"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "/api/misc/clock": {
    "get": {
      "tags": ["Misc"],
      "summary": "Get the current time in different timezones",
      "description": "Returns the current time in different timezones",
      "responses": {
        "200": {
          "description": "Successful operation",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "wib": {
                    "type": "string",
                    "description": "Current time in Waktu Indonesia Barat timezone"
                  },
                  "wita": {
                    "type": "string",
                    "description": "Current time in Waktu Indonesia Tengah timezone"
                  },
                  "wit": {
                    "type": "string",
                    "description": "Current time in Waktu Indonesia Timur timezone"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default miscEndpoints;