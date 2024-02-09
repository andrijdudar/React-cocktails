
import './NavBurger.css';
import { AppContext, useMyContext } from "../../Context";

function NavBurger() {

  const { state, setState } = useMyContext(AppContext);
  const { burgerMenuToggle } = state;
  const handleClickBurger = () => {
    setState({
      ...state,
      burgerMenuToggle: !burgerMenuToggle,
    })
  };

  return (
    <div
      id="nav-icon1"
      className={burgerMenuToggle ? "open" : ""}
      onClick={handleClickBurger}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavBurger;
