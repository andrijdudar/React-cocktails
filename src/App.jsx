import './App.scss';
import { TestPhoto } from './components/TestPhoot';
import AppCocktails from './components/cocktails/AppCocktails';
// import AppCocktails from './components/cocktails/AppCocktails';

function App() {
  return (
    <div className="App">
      <div className="App-header section ">
        <TestPhoto />
        <AppCocktails />
      </div>
    </div>
  );
}

export default App;
