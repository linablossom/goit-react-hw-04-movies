import React from "react";
import ContentSwitcher from "../components/ContentSwitcher";
import axios from "axios";
import { movieRoutes } from "../routes/movieRoutes";
import Navigation from "../components/Navigation/Navigation";
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
  state = {
    loaded: false,
    loading: false,
    details: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { movieId } = this.props.match.params;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=24f3be077b2e648be81bca41e098d522`
      );
      this.setState({ details: response.data, loading: false, loaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.loaded || this.state.loading) return null;
    const { prevPath } = this.props.location.state || {};

    return (
      <>
        <MovieDetailsPage
          details={this.state.details}
          goBack={() => this.props.history.push(prevPath)}
        />
        <MovieTabs
          routes={movieRoutes}
          basePath={this.props.match.url}
          prevPath={prevPath}
        />
        <ContentSwitcher
          routes={movieRoutes}
          basePath={this.props.match.path}
        />
      </>
    );
  }
}

export default MovieView;
