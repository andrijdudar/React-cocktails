import { useState } from "react";
import "./Menu.css";
import { AppContext, useMyContext } from "../../Context";
import cn from "classnames";

const categories = [
  {
    "id": 101,
    "name": "гарячі",
    "parent_id": 3,
  },
  {
    "id": 102,
    "name": "холодні",
    "parent_id": 3,
  },
];
const categoriesDish = [
  {
    "id": 1,
    "name": "Салати",
    "parent_id": 100 | null,
  },
  {
    "id": 2,
    "name": "Супи",
    "parent_id": 100 | null,
  },
  {
    "id": 3,
    "name": "Гарніри",
    "categories": categories,
    "parent_id": 100 | null,
  },
  {
    "id": 4,
    "name": "Десерти",
    "parent_id": 100 | null,
  },
];
const categoriesCocktail = [
  { id: 1, name: "Cocktails" },
  { id: 2, name: "Alcohol" },
  { id: 3, name: "Non-Alcohol" },
  { id: 4, name: "Hot Drinks" },
  { id: 5, name: "Smoothies" },
];


export const Menu = () => {
  const { state, setState } = useMyContext(AppContext);
  // const [pidCategory, setPidCategory] = useState(null);
  // const { } = state;

  const [isActiveDish, setActiveDish] = useState(true);
  const [isActiveCocktail, setActiveCocktail] = useState(false);
  const [isActiveCategoryId, setActiveCategoryId] = useState(null);
  const handleMenuDish = () => {
    setActiveCocktail(false);
    setActiveDish(!isActiveDish);
    setActiveCategoryId(null);
    setState({
      ...state,
      cocktailsToggle: false,
      dishFormToggle: false,
    });
  };
  const handleMenuBar = () => {
    setActiveDish(false);
    setActiveCocktail(!isActiveCocktail);
    setActiveCategoryId(null);
    setState({
      ...state,
      cocktailsToggle: false,
      dishFormToggle: false,
    });
  };

  const handleClickCategory = (id) => {
    setState({
      ...state,
      menuCardsToggle: true,
      cocktailsToggle: false,
      dishFormToggle: false,
    });
    setActiveCategoryId(id);
  };

  const handleClickAddDish = () => {
    setState({
      ...state,
      menuCardsToggle: false,
      cocktailsToggle: false,
      dishFormToggle: true,
    });
    setActiveDish(false);
  };
  const handleClickAddCocktail = () => {
    setState({
      ...state,
      dishFormToggle: false,
      menuCardsToggle: false,
      cocktailsToggle: true,
    });
    setActiveCocktail(false);
  };

  return (
    <aside class="menu">
      <ul class="menu-list">
        <li className="">
          <a
            onClick={handleMenuDish}
            class={cn("menu-item has-background-grey", { "is-active": isActiveDish })}
            href="#/"
          >
            Кухня
          </a>

          {isActiveDish &&
            <>
              <ul>
              {categoriesDish.map((category) => (
                  <li
                    key={category.id}
                    className={cn(
                      "is-hovered",
                      { "active-category": isActiveCategoryId === category.id },
                    )}
                  >
                    <a
                      href="#/"
                      onClick={() => handleClickCategory(category.id)}
                      className="has-text-danger"
                  >
                    {category.name}

                    {category.categories &&
                      <ul>
                        {category.categories.map((category) =>
                          <li
                            className={cn(
                              "li",
                              "is-hovered",
                              { "active-category": isActiveCategoryId === category.id },
                            )}
                            key={category.id}
                          >
                            <a
                              href="#/"
                              className="has-text-danger"
                              // onClick={() => handleClickCategory(category.id)}
                            >
                              {category.name}
                            </a>
                          </li>
                        )}
                      </ul>
                    }
                      </a>
                  </li>
                ))}
              </ul>
              <div className="control input-container has-icons-left has-icons-right">
                <input className="input input-search is-small is-rounded" type="text" placeholder="Шукати" />
                <span className="icon icon-search is-large is-left">
                  <i className="fas fa-search"></i>
                </span>
                {/* <button className="button is-small is-rounded is-info">
                  <span className="icon is-small">
                    <i className="fas fa-search"></i>
                  </span>
                </button> */}
              </div>

              <div className="add-dish">
                <button
                  className="button is-small is-rounded is-danger-btn is-danger"
                  onClick={handleClickAddDish}
                >
                  <span>Додати нову страву</span>
                </button>
              </div>
            </>
          }
        </li>
        <li>
          <a

            class={cn("menu-item has-background-grey",
              { "is-active": isActiveCocktail })}
            href="#/"
            onClick={handleMenuBar}
          >
            Бар
          </a>
          {isActiveCocktail &&
            <>
              <ul>
                {categoriesCocktail.map((category) => (
                  <li
                    className={cn(
                      "li",
                      "is-hovered",
                      { "active-category": isActiveCategoryId === category.id },
                    )}
                    key={category.id}
                  >
                    <a
                      href="#/"
                      className="has-text-danger"
                      onClick={() => handleClickCategory(category.id)}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="control input-container has-icons-left has-icons-right">
                <input className="input input-search is-small is-rounded" type="text" placeholder="Шукати" />
                <span className="icon icon-search is-large is-left">
                  <i className="fas fa-search"></i>
                </span>
                {/* <button className="button is-small is-rounded is-info">
                    <span className="icon is-small">
                      <i className="fas fa-search"></i>
                    </span>
                  </button> */}
              </div>

              <div className="add-dish">
                <button
                  className="button  is-small is-rounded is-danger is-danger-btn"
                  onClick={handleClickAddCocktail}
                >
                  <span>Додати новий напій</span>
                </button>
              </div>
            </>
          }
        </li>
      </ul>
    </aside>
  )
}
