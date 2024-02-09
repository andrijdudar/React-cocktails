import { useState } from 'react';
import './MenuCards.css';
// import { Pagination } from '../pagination/Pagination';
import { AppContext, useMyContext } from '../../Context';
import cn from 'classnames';
import { Search } from '../search/Search';



export const MenuCards = () => {
  const { state } = useMyContext(AppContext);
  const { dishes } = state;
  const [isClosed, setIsClosed] = useState(true);
  const [currentCardId, setCurrentCardId] = useState(null);
  const [currentCardIngredients, setCurrentCardIngredients] = useState([]);


  const toggleContainer = (card) => {
    setCurrentCardId(card.id);
    setCurrentCardIngredients(card.ingredients.split(', '));
    console.log(card.ingredients.split(', '));
    setIsClosed(!isClosed);
  };
  return (
    <>
      {/* <Pagination /> */}
      <>
        <Search />
      </>
      <div className="menuCards">
        {dishes.map(card => (
          <div className={`container ${currentCardId === card.id ? '' : 'closed'}`} key={card.id}>
            <header id="toggle" onClick={() => toggleContainer(card)}>
              <div
                className={cn("header", { "img-none": card.image_url === null })}
                style={{
                  backgroundImage: `url(${card.image_url})`
                }}
              >
              </div>
              <div className="title">
                {card.dish_name}
              </div>
            </header>

            <article>
              <ul className="ingredients">
                {/* <li>
                  {card.id || 1}
                </li> */}
                {/* <li>
                  {card.image_public_id || 1}
                </li> */}
                {/* <li>
                  {card.dish_name}
                </li> */}
                <li>
                  <ul>
                    {currentCardIngredients.map((item, index) => (
                     <>
                        <li key={index}>{item}</li>
                        <hr />
                     </>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  {card.user_id || 1}
                </li> */}
                {/* <li>
                  {card.first_name || 1}
                </li> */}
                {/* <li>
                  {card.created_at || 1}
                </li> */}
                {/* <li>
                  {card.updated_at || 1}
                </li> */}
                {/* <li>
                  {card.stop_list || 1}
                </li> */}
                {/* <li>
                  {card.category_name || 1}
                </li> */}
                {/* <li>
                  {card.category_id || 1}
                </li> */}

              </ul>
              <div className="description">
                {card.description}
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-link is-rounded is-hover">
                    Редагувати
                  </button>
                </p>
                <p className="control">
                  <button className="button is-danger is-rounded is-hover">
                    Видалити
                  </button>
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>

  );
};
