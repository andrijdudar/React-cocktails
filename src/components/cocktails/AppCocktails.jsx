import { useState } from 'react';
import { CocktailForm } from './CocktailForm';
import { CocktailsList } from './CocktailList';

function AppCocktails() {
  const [cocktailList, setCocktailList] = useState([]);

  // useEffect(() => {
  //     getCocktailsServer()
  //       .then((cocktailsFromServer) => {
  //         setCocktailList(cocktailsFromServer);
  //       })
  // .catch(() => {  })
  // }, []);

  const onDeleteCocktail = (cocktailId) => {
    const updatedCocktailList = cocktailList.filter(cocktail => cocktail.id !== cocktailId);
    setCocktailList(updatedCocktailList);
  };

  return (
      <>
        <h1 className='title has-text-white is-1'>Авторські коктейлі</h1>
        <CocktailForm
          cocktailList={cocktailList}
          setCocktailList={(v) => setCocktailList(v)}
        />
        <CocktailsList
          cocktailList={cocktailList}
          onDeleteCocktail={onDeleteCocktail}
        />
      </>
  );
}

export default AppCocktails;
