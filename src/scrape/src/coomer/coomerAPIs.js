import axios from "axios";

async function coomer(coomer) {
    try {
        const url = `https://coomer.su/onlyfans/${coomer}`
        const response = await axios.get(url);
        const attachments = response.data.attachments;
        const randomAttachment = pickRandom(attachments);
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