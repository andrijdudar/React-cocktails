export function getCocktailsFromServer() {
  return fetch('https://27b7-46-119-118-70.ngrok.io/api/grids/')
    .then((response) => {
      if (!response.ok) {
        alert('Дані з сервера не отримано');
        console.log('Дані з сервера не отримано');
        // setErrorMassege('Дані з сервера не отримано');
      }

      return response.json();
    })
}
