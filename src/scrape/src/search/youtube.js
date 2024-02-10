import yts from "yt-search";
async function youtube(query) {
  return new Promise((resolve, reject) => {
    try {
      const cari = yts(query).then((data) => {
        let res = data.all;
        return res;
      });
      resolve(cari);
    } catch (error) {
      reject(error);
    }
    console.log(error);
  });
}

export default youtube;
