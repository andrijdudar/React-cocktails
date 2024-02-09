
import './SideBar.css';
import { AppContext, useMyContext } from '../../Context';
import { useState } from 'react';
import { MenuCards } from './MenuCards';
import { ALLDISHES, OBG } from '../../Obgects';

function SideBar() {
  const { state, setState } = useMyContext(AppContext);
  const { burgerMenuToggle, menuCardsToggle } = state;
  const [titleCategory, setTitleCategory] = useState('');

  const [activeCategoryIds, setActiveCategoryIds] = useState([]);

  const handleMenuDish = (id, child, categoryName) => {
    if (child) {
      setActiveCategoryIds([...activeCategoryIds, id]);
    } else {
      handleCards(id, categoryName);
    }
  }

  const handleCards = (categoryId, categoryName) => {
    const selectedDishes = ALLDISHES.filter(item => item.category_id === categoryId);
    setState({
      ...state,
      dishes: selectedDishes,
      menuCardsToggle: true,
      burgerMenuToggle: false,
    });
    setActiveCategoryIds([]);
    setTitleCategory(categoryName);
  }

  const renderCategories = (parentId) => {
    return OBG.filter(item => item.parent_id === parentId).map(item => (
      <li className="sidebar-item" key={item.id}>
        <a href="#/" onClick={() => handleMenuDish(item.id, item.child, item.name)}>
          {item.name}
        </a>
        {activeCategoryIds.includes(item.id) && item.child && (
          <ul className="sidebar-nav">
            {renderCategories(item.id)}
          </ul>
        )}
      </li>
    ));
  }

  return (
    <div id="wrapper" className={burgerMenuToggle ? "menuDisplayed" : ""}>
      {titleCategory}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {renderCategories(1)}
        </ul>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {menuCardsToggle && <MenuCards />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
