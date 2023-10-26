import { useEffect, useState } from 'react';
import './App.scss';
import { CocktailForm } from './components/CocktailForm';
import { CocktailsList } from './components/CocktailList';
import { getCocktailsFromServer } from './services/cocktailsFromServer';

function App() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    getCocktailsFromServer()
      .then((cocktailsFromServer) => {
        setCocktailList(cocktailsFromServer);
        console.log(cocktailList); // Виведе оновлений список коктейлів
        console.log(cocktailsFromServer);
      })
    .catch(() => {setErrorMassege(!errorMassegee)})
  }, []);




  const [errorMassegee, setErrorMassege] = useState(false);

  const onDeleteCocktail = (cocktailId) => {
    const updatedCocktailList = cocktailList.filter(cocktail => cocktail.id !== cocktailId);
    setCocktailList(updatedCocktailList);
  };

  return (
    <div className="App">
      <div className="App-header section ">
        <h1 className='title has-text-white is-1'>Авторські коктейлі</h1>
        {/* {loading && (

        )} */}
        {errorMassegee && (
          <h1>Дані з сервера не показуються</h1>
        )}
        <CocktailForm
          cocktailList={cocktailList}
          setCocktailList={(v) => setCocktailList(v)}
        />
        <CocktailsList
          cocktailList={cocktailList}
          setCocktailList={(v) => setCocktailList(v)}

          onDeleteCocktail={onDeleteCocktail}
        />
      </div>
    </div>
  );
}

export default App;
