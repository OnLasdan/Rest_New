import axios from "axios";

async function coomer(coomer) {
    try {
        const response = await axios.get(`https://coomer.su/api/v1/onlyfans/user/${coomer}?o=0`);
        const data = response.data;
        console.log(data);

        // Pilih data yang tidak kosong jika tersedia
        const nonEmptyData = data.filter(item => item.attachments && item.attachments.length > 0);
        if (nonEmptyData.length === 0) {
            throw new Error('Tidak ada data yang valid.');
        }

        // Ambil attachment secara paralel
        const randomAttachmentsPromises = nonEmptyData.map(item => pickRandom(item.attachments));
        const randomAttachments = await Promise.all(randomAttachmentsPromises);
        console.log(randomAttachments);

        const randomPath = pickRandom(randomAttachments).path;
        return {
            path: 'https://coomer.su/' + randomPath
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

export default coomer;
