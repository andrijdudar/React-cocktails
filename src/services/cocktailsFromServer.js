// export function getCocktailsFromServer() {
//   return fetch('https://27b7-46-119-118-70.ngrok.io/api/grids/')
//     .then((response) => {
//       if (!response.ok) {
//         alert('Дані з сервера не отримано');
//         console.log('Дані з сервера не отримано');
//         // setErrorMassege('Дані з сервера не отримано');
//       }

//       return response.json();
//     })
// }

// Змініть вашу функцію отримання даних
export function getCocktailsFromServer() {
  return fetch('https://27b7-46-119-118-70.ngrok.io/api/grids/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Дані з сервера не отримано');
      }
      alert(' Використовуються дані з сервера');

      return response.json();
    })
    .catch((error) => {
      alert('Дані з сервера не отримано. Використовуються локальні дані');
      console.error(error);
      console.log('Використовуються локальні дані');
      return require('../cocktailsList.json');
    });
}
