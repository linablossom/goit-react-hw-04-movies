import React from "react";

const HomeViews = React.lazy(() => import("../views/HomeViews"));
const MoviesViews = React.lazy(() => import("../views/MoviesViews"));
const MovieView = React.lazy(() => import("../views/MovieView"));

export const mainRoutes = [
  { name: "Home", path: "/", exact: true, component: HomeViews },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: MoviesViews,
  },
  { path: "/movies/:movieId", component: MovieView },
];
