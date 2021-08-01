import React from "react";
import ContentSwitcher from "./ContentSwitcher";
import { mainRoutes } from "../routes/mainRoutes";
import { MainStyled } from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <ContentSwitcher routes={mainRoutes} />
    </MainStyled>
  );
};

export default Main;
