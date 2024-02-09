

export const SERVER_URL = 'https://6acb-46-119-118-70.ngrok-free.app';

const handleResponse = async (response) => {
  if (!response.ok) {
    console.log('Дані з сервера не отримано');
    throw new Error('Дані з сервера не отримано');
  }
  return await response.json();
}

export const client = {
  async get(url) {
    try {
      const response = await fetch(SERVER_URL + url, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Помилка при виконанні GET запиту:', error);
      throw error;
    }
  },

  async post(url, data) {
    try {
      const formData = new FormData();
      formData.append(data);
      const response = await fetch(SERVER_URL + url, {
        method: 'POST',
        body: formData,
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Помилка при виконанні POST запиту:', error);
      throw error;
    }
  },

  async put(url, data) {
    try {
      const response = await fetch(SERVER_URL + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Помилка при виконанні PUT запиту:', error);
      throw error;
    }
  },

  async patch(url, data) {
    try {
      const response = await fetch(SERVER_URL + url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Помилка при виконанні PATCH запиту:', error);
      throw error;
    }
  },

  async delete(url) {
    try {
      const response = await fetch(SERVER_URL + url, { method: 'DELETE' });
      return await handleResponse(response);
    } catch (error) {
      console.error('Помилка при виконанні DELETE запиту:', error);
      throw error;
    }
  }
}


// export const SERVER_URL = 'https://6acb-46-119-118-70.ngrok-free.app';

// const handleResponse = (response) => {
//   if (!response.ok) {
//     console.log('Дані з сервера не отримано');
//   }
//   return response.json();
// }

// export const client = {
//   get(url) {
//     fetch(SERVER_URL + url, {
//       method: "get",
//       headers: new Headers({
//         "ngrok-skip-browser-warning": "69420",
//       }),
//     })
//       .then(handleResponse)
//       .then((data) => console.log(data))
//   },

//   // postText(url, data) {
//   //   return fetch(SERVER_URL + url, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: { 'file': data },
//   //   })
//   //     .then(handleResponse)
//   //     .then((result) => {
//   //       console.log(result);
//   //     })
//   // },

//   // postFile(url, data) {
//   //   const formData = new FormData();
//   //   formData.append('file', data);
//   //   return fetch(SERVER_URL + url, {
//   //     method: 'POST',
//   //     body: formData,
//   //   })
//   //     .then(handleResponse)
//   //     .then((result) => {
//   //       console.log(result);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error during upload:', error);
//   //     });
//   // },


//   post(url, data) {
//     const formData = new FormData();
//     formData.append(data);
//     return fetch(SERVER_URL + url, {
//       method: 'POST',
//       body: formData,
//     })
//       .then(handleResponse)
//       // .then((result) => {
//       //   console.log(result);
//       // })
//       // .catch((error) => {
//       //   console.error('Error during upload:', error);
//       // });
//   },

//   put(url, data) {
//     return fetch(SERVER_URL + url, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(handleResponse)
//       // .then((result) => {
//       //   console.log(result);
//       // })
//       // .catch((error) => {
//       //   console.error('Error during upload:', error);
//       // });
//   },

//   patch(url, data) {
//     return fetch(SERVER_URL + url, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(handleResponse)
//       // .then((result) => {
//       //   console.log(result);
//       // })
//       // .catch((error) => {
//       //   console.error('Error during upload:', error);
//       // });
//   },

//   delete(url) {
//     return fetch(SERVER_URL + url, { method: 'DELETE' })
//       .then(handleResponse)
//       // .then((result) => {
//       //   console.log(result);
//       // })
//       // .catch((error) => {
//       //   console.error('Error during upload:', error);
//       // });
//   }
// }
