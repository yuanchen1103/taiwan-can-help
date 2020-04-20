export default function poster(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
