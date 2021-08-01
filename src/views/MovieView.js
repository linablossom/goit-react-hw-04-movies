import React from "react";
import ContentSwitcher from "../components/ContentSwitcher";
import { movieRoutes } from "../routes/movieRoutes";
import Navigation from "../components/Navigation";
import MovieDetailsPage from "../components/MovieDetailsPage";
import styled from "styled-components";

const MovieTabs = styled(Navigation)`
  ul {
    display: flex;
    flex-direction: column;
    list-style: square;
  }
  li {
    color: red;
    margin: 10px 0 0 20px;
  }
`;

class MovieView extends React.Component {
  render() {
    const { movieId } = this.props.match.params;
    return (
      <>
        <MovieDetailsPage
          movieId={movieId}
          goBack={this.props.history.goBack}
        />
        <MovieTabs routes={movieRoutes} basePath={this.props.match.url} />
        <ContentSwitcher
          routes={movieRoutes}
          basePath={this.props.match.path}
        />
      </>
    );
  }
}

export default MovieView;
