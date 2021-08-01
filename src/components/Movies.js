import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import MoviesList from "./MoviesList";

class Movies extends Component {
  state = {
    searchedMovies: [],
  };

  onSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=24f3be077b2e648be81bca41e098d522&language=en-US&page=1&include_adult=false&query=${query}`
      );
      this.setState({ searchedMovies: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <SearchForm onSearch={this.onSearch} />
        <MoviesList movies={this.state.searchedMovies} />
      </>
    );
  }
}

export default Movies;
