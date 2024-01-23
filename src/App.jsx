import { useState } from 'react';
import './App.scss';
import { TestPhoto } from './components/TestPhoot';
// import { NavBar } from './components/navBar/NavBar';
import AppCocktails from './components/cocktails/AppCocktails';

function App() {
  const [cocktails, setCocktails] = useState(false);
  return (
    <div className="App">
      <div className="App-header section ">
        {/* <NavBar /> */}
        <TestPhoto />
        <button
          className='btn_done btn_add'
          onClick={() => setCocktails(!cocktails)}
        >
          Open Cocktails
        </button>
        {cocktails &&
          <AppCocktails />
        }
      </div>
    </div>
  );
}

export default App;
