export const SERVER_URL = 'https://4cf4-194-44-160-206.ngrok-free.app';

const handleResponse = (response) => {
  if (!response.ok) {
    // alert('Дані з сервера не отримано');
  }
  // alert('Використовуються дані з сервера');
  // console.log(response);
  // return response.json();
  return response;
}

export const client = {
  get(url) {
    return fetch(SERVER_URL + url)
      .then(handleResponse)
  },

  post(url, data) {
    return fetch(SERVER_URL + url, {
      method: 'POST',
      // body: JSON.stringify(data),
      body: data,
      // headers: {
      //   'Content-Type': 'application/json; charset=utf-8',
      // },
    })
      .then(handleResponse)
  },

  delete(url) {
    return fetch(SERVER_URL + url, { method: 'DELETE' })
      .then(handleResponse)
  }
}
