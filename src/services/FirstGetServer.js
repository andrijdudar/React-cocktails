function getCocktailsFromServer() {
  return fetch('https://f0f8-46-119-118-70.ngrok-free.app/hello/')
    .then((response) => {
      if (!response.ok) {
        alert('Дані з сервера не отримано');
        // console.log('Дані з сервера не отримано');
        // setErrorMassege('Дані з сервера не отримано');
      }

      return response.text();
    })
}

export default getCocktailsFromServer;

// useEffect(() => {
//   getCocktailsFromServer()
//     .then((cocktailsFromServer) => {
//       setCocktailList(cocktailsFromServer);
//       console.log(cocktailList); // Виведе оновлений список коктейлів
//       console.log(cocktailsFromServer);
//     })
//     .catch(() => {})
// }, []);
