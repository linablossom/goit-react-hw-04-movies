import React from "react";
import { HeaderStyled } from "./HeaderStyled";
import Navigation from "../Navigation/Navigation";
import { mainRoutes } from "../../routes/mainRoutes";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation routes={mainRoutes} />
    </HeaderStyled>
  );
};

export default Header;
