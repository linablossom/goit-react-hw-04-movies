import React from "react";
import { Switch, Route } from "react-router-dom";

const ContentSwitcher = ({ routes, basePath = "" }) => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }) => (
        <Route
          path={basePath + path}
          component={component}
          exact={exact}
          key={path}
        />
      ))}
    </Switch>
  );
};

export default ContentSwitcher;
