function getCocktailsFromServer() {
  return fetch("https://7805-46-119-118-70.ngrok-free.app")
    .then((response) => {
      if (!response.ok) {
        alert('Дані з сервера не отримано');
        console.log('Дані з сервера не отримано');
        // setErrorMassege('Дані з сервера не отримано');
      }

      return response.json();
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
