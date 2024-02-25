<<<<<<< HEAD
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
=======
import axios from 'axios'
import fs from 'fs'

export default async function coomer(username) {
  const outputPath = `${username}.json`;
  let maxO = 0;
  let result 
  try {
    if (fs.existsSync(outputPath)) {
      const lah  = fs.readFileSync(outputPath, 'utf-8');
     return result = JSON.parse(lah)

    }
    const allAttachments = [];

    while (true) {
      const response = await axios.get(
        `https://coomer.su/api/v1/onlyfans/user/${username}?o=${maxO}`
      );

      const data = response.data;

      const nonEmptyData = data.filter(
        (item) => item.attachments && item.attachments.length > 0
      );

      if (nonEmptyData.length > 0) {
        const attachments = nonEmptyData.flatMap((item) =>
          item.attachments.map((attachment) => 'https://coomer.su/' + attachment.path)
        );

        allAttachments.push(...attachments);
        maxO += 50; 
      } else {
        console.log(`Tidak ada data valid untuk o=${maxO}`);
        break; 
      }
    }

     result = allAttachments

    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    console.log(`Hasil berhasil disimpan di ${outputPath} total ${result.length}`);

    return result;
  } catch (error) {
    console.error('Gagal mengambil data coomer:', error.message);
    throw error;
  }
}
>>>>>>> dac9534 (-)
