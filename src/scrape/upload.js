import Client from 'sdwc'
import FormData from 'form-data'

async function sendFile(buffer, fileExtension) {
  try {
    const webhookURL =
      'https://discord.com/api/webhooks/1180707117452247080/ynvl7bhzh7MbsXwvwfMbxCzdAVyzOdO-t-BSvbpjxkMKYrz_pFbZas4uoi8wruqLPPSI'
    const client = new Client({
      url: webhookURL,
    })

    const data = new FormData()
    const media = buffer

    data.append('content', 'xyla')

    data.append('files', media, {
      contentType: 'application/octet-stream',
      name: 'file',
      filename: `MUFAR${fileExtension}`,
    })

    const result = await client.execute(data, true, true, data.getHeaders())

    const cleanedUrlArray = result.attachments.map((item) =>
      item.url.replace(/\?ex=.*/, '')
    )
    const result2 = cleanedUrlArray.join(', ')

    return result2
  } catch (error) {
    console.error('Error in sendFile:', error)
    throw error // Re-throw the error for the calling code to handle
  }
}

export { sendFile }
