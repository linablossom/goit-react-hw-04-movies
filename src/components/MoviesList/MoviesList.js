import React from "react";
import { NavLink } from "react-router-dom";
import { MoviesListStyled } from "./MoviesListStyled";

const MoviesList = ({ movies, prevPath }) => {
  return (
    <MoviesListStyled className="homeList">
      {movies.map(({ title, id }) => {
        return (
          <li className="homeListItem" key={id}>
            <NavLink
              className="homeListLink"
              activeClassName="activeHomeListLink"
              to={{ pathname: `/movies/${id}`, state: { prevPath } }}
              exact
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </MoviesListStyled>
  );
};

export default MoviesList;
