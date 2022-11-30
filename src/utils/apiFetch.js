export async function filterFetch(url, options) {
  return await fetch(url, options)
    .then((respone) => {
      if (respone.status === 500) {
        throw new Error("Error Internal Server");
      }
      return respone.json();
    })
    .catch((err) => {
      throw new Error("Error Internal Server"); //kalo balikannya dari backend HTML
    })
    .then((json) => {
      if (json.status === false) {
        throw new Error(json.message);
      }
      return json.data;
    });
}