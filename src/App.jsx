import { useState } from 'react';
import './App.scss';
import { CocktailForm } from './components/CocktailForm';
import { CocktailsList } from './components/CocktailList';

function App() {
  const [cocktailList, setCocktailList] = useState([]);

  const onDeleteCocktail = (cocktailId) => {
    const updatedCocktailList = cocktailList.filter(cocktail => cocktail.id !== cocktailId);
    setCocktailList(updatedCocktailList);
  };

  return (
    <div className="App">
      <div className="App-header section ">
        <h1 className='title has-text-white is-1'>Авторські коктейлі</h1>
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
