async function traceMoe(url) {
  try {
    let res = await fetch(
      `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(url)}`
    );
    let json = await res.json();
    return json;
  } catch (error) {
    return { error: error.message };
  }
}

export default traceMoe;
