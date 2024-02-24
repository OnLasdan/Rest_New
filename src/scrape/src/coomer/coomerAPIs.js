import axios from "axios";

async function coomer(coomer) {
    try {
        const response = await axios.get(`https://coomer.su/api/v1/onlyfans/user/belledelphine?o=0`);
        console.log(response)
        const data = response.data
        const attachments = data.attachments
        console.log(attachments)
        const randomData = pickRandom(data);
        const randomAttachment = pickRandom(randomData);
        const randomPath = pickRandom(randomAttachment.path);
        return {
            url: randomAttachment.url,
            path: 'https://coomer.su' + randomPath
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function pickRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export default coomer