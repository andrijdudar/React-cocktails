// import { useState } from "react";
import { StopList } from "./../StopList/StopList";
import { CocktailForm } from "./../cocktails/CocktailForm";
import { DishForm } from "./../Dish/DishForm";
import { AppContext, useMyContext } from "../../Context";
import "./Main.css";
// import { MenuCards } from "./MenuCards";
import SideBar from "./SideBar";

export const Main = () => {
  const { state } = useMyContext(AppContext);
  const { stopListToggle, menuToggle, cocktailsToggle, dishFormToggle } = state;

  return (
    <main className="main">
      {menuToggle &&
        <>
        <SideBar />
        {/* <Menu /> */}
          {/* {menuCardsToggle && <MenuCards />} */}
          {cocktailsToggle && <CocktailForm />}
          {dishFormToggle && <DishForm />}
        </>
      }
      {stopListToggle && <StopList />}

      {/* <TestPhoto  /> */}
    </main>
  );
};
