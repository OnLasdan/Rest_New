const userEndpoints = {   
  "/api/auth/register": {
                          "post": {
                            "summary": "User Registration",
                            "tags": ["Auth"],
                            "requestBody": {
                              "content": {
                                "application/json": {
                                  "schema": {
                                    "type": "object",
                                    "properties": {
                                      "email": {
                                        "type": "string",
                                        "format": "email"
                                      },
                                      "password": {
                                        "type": "string"
                                      },
                                      "username": {
                                        "type": "string"
                                      }
                                    },
                                    "required": ["email", "password", "username"]
                                  }
                                }
                              }
                            },
                            "responses": {
                              "200": {
                                "description": "User registered successfully"
                              },
                              "400": {
                                "description": "Bad Request - Invalid input data"
                              },
                              "500": {
                                "description": "Internal Server Error"
                              }
                            }
                          }
                        },
                        "/api/auth/login": {
                          "post": {
                            "summary": "User Login",
                            "tags": ["Auth"],
                            "requestBody": {
                              "content": {
                                "application/json": {
                                  "schema": {
                                    "type": "object",
                                    "properties": {
                                      "email": {
                                        "type": "string",
                                        "format": "email"
                                      },
                                      "password": {
                                        "type": "string"
                                      }
                                    },
                                    "required": ["email", "password"]
                                  }
                                }
                              }
                            },
                            "responses": {
                              "200": {
                                "description": "User logged in successfully",
                                "content": {
                                  "application/json": {
                                    "example": {
                                      "status": "Success",
                                      "token": "your_generated_jwt_token"
                                    }
                                  }
                                }
                              },
                              "400": {
                                "description": "Bad Request - Invalid input data"
                              },
                              "401": {
                                "description": "Unauthorized - Invalid email or password"
                              },
                              "500": {
                                "description": "Internal Server Error"
                              }
                            }
                          }
                        }
}

module.exports = userEndpoints;