// import { useEffect } from 'react';
// import { useEffect } from 'react';
import './App.scss';
import { Main } from './components/Main/Main';
import { NavBar } from './components/navBar/NavBar';
// import { AppContext, useMyContext } from './Context';
// import { getAllCategories, getAllDishes, getAllTags } from './utils/cocktail';
// import { ALLDISHES, OBG, TAGS } from './Obgects';


function App() {
  // const { state, setState } = useMyContext(AppContext);


  // localStorage.setItem('categories', JSON.stringify(OBG));
  // localStorage.setItem('dishes', JSON.stringify(ALLDISHES));
  // localStorage.setItem('tags', JSON.stringify(TAGS));
  // const categoriesFromStorage = JSON.parse(localStorage.getItem('categories'));
  // const dishesFromStorage = JSON.parse(localStorage.getItem('dishes'));
  // const tagsFromStorage = JSON.parse(localStorage.getItem('tags'));

//   useEffect(() => {
//     setState((prevState) => ({
//       ...prevState,
//       allCategories: categoriesFromStorage,
//       allDishes: dishesFromStorage,
//       allTags: tagsFromStorage,
//     }))
// }, []);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Отримати дані з сервера
//       const categories = await getAllCategories();
//       const dishes = await getAllDishes();
//       const tags = await getAllTags();

//       // Зберегти дані в LocalStorage
//       localStorage.setItem('categories', JSON.stringify(categories));
//       localStorage.setItem('dishes', JSON.stringify(dishes));
//       localStorage.setItem('tags', JSON.stringify(tags));
//       const categoriesFromStorage = JSON.parse(localStorage.getItem('categories'));
//       const dishesFromStorage = JSON.parse(localStorage.getItem('dishes'));
//       const tagsFromStorage = JSON.parse(localStorage.getItem('tags'));

//       // Перевірити, чи дані існують в LocalStorage
//       if (categoriesFromStorage && dishesFromStorage && tagsFromStorage) {
//         // Встановити дані в стейт або використати їх для інших цілей
//         setState((prevState) => ({
//           ...prevState,
//           allCategories: categoriesFromStorage,
//           allDishes: dishesFromStorage,
//           allTags: tagsFromStorage,
//         }));
//       } else {
//         // Якщо дані не знайдено в LocalStorage, виконати відповідні дії або відобразити повідомлення
//         console.log('Дані не знайдено в LocalStorage');
//       }

//       // Встановити дані з LocalStorage в стейт
//       // setState(prevState => ({
//       //   ...prevState,
//       //   allCategories: JSON.parse(localStorage.getItem('categories')),
//       //   allDishes: JSON.parse(localStorage.getItem('dishes')),
//       //     allTags: JSON.parse(localStorage.getItem('tags')),
//       // }));

//       console.log('категорії', categories);
//       console.log('страви', dishes);
//       console.log('теги', tags);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData(); // Викликати функцію зразу

//   const time = setInterval(fetchData, 10000); // Оновлювати дані кожні 10 секунд

//   return () => clearInterval(time); // Очистити інтервал після завершення компонента

// }, []);


return (
  <div className="App">
    <NavBar />
    <Main />
  </div>
);
}

export default App;
