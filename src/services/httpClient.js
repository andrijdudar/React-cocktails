export const SERVER_URL = 'https://a2af-46-119-118-70.ngrok-free.app/api';

const handleResponse = (response) => {
  if (!response.ok) {
    console.log('Дані з сервера не отримано');
  }
  return response.json();
  // return response;
}

export const client = {
  get(url) {
    return fetch(SERVER_URL + url, {
      method: 'GET',
    })
      .then(handleResponse)
  },

  postText(url, data) {
    return fetch(SERVER_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(handleResponse)
  },

  postFile(url, data) {
    const formData = new FormData();
    formData.append('photo', formData);
    return fetch(SERVER_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: formData,

    })
      .then(handleResponse)
  },

  delete(url) {
    return fetch(SERVER_URL + url, { method: 'DELETE' })
      .then(handleResponse)
  }
}
