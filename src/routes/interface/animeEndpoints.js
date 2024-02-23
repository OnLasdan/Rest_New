const createAnimeEndpoint = (parameters, description) => {
  return {
    get: {
      tags: ['Anime'],
      parameters,
      responses: {
        200: {
          description: 'Successful response',
          content: {
            'application/json': {
              example: {
                status: 'Success',
                code: 200,
                author: 'Xyla',
                data: 'data_doujin', // Ganti dengan data yang sesuai
              },
            },
          },
        },
        default: {
          description: 'Unexpected error',
          content: {
            'application/json': {
              example: {
                status: 'Error',
                code: 500,
                message: 'Internal Server Error',
              },
            },
          },
        },
      },
    },
  }
}

const animeEndpoints = {
  '/api/anime/doujin-latest': createAnimeEndpoint(
    [],
    'Successfully retrieved response'
  ),
  '/api/anime/doujin-search': createAnimeEndpoint(
    [
      {
        name: 'q',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'URL for doujin search',
      },
    ],
    'Successful response'
  ),
  '/api/anime/doujin-ch': createAnimeEndpoint(
    [
      {
        name: 'url',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'URL for doujin search',
      },
    ],
    'Successful response'
  ),
  '/api/anime/doujin-img': createAnimeEndpoint(
    [
      {
        name: 'url',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'URL doujin get image',
      },
    ],
    'Successful response'
  ),
  '/api/anime/hentai': createAnimeEndpoint([], 'Successfully response.'),
  '/api/anime/whatanime': createAnimeEndpoint(
    [
      {
        name: 'url',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'URL of the image or video frame',
      },
    ],
    'Successful response'
  ),
  '/api/anime/nhentai-search': createAnimeEndpoint(
    [
      {
        name: 'q',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'q of the image or video frame',
      },
    ],
    'Successful response'
  ),
}

export default animeEndpoints
