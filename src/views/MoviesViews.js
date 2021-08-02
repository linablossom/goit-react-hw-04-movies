import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";

const getSearchQuery = (search) =>
  search.replace(/.*[?&]search=(.*?)(?:&|$).*/, "$1");

class MoviesViews extends Component {
  state = {
    searchedMovies: [],
  };

  componentDidUpdate(prevProps) {
    const query = getSearchQuery(this.props.location.search);
    const prevQuery = getSearchQuery(prevProps.location.search);

    if (query !== prevQuery) {
      if (query) this.loadMovies(query);
      else this.clearMovies();
    }
  }

  componentDidMount() {
    const query = getSearchQuery(this.props.location.search);
    if (query) this.loadMovies(query);
  }

  onSearch = async (query) => {
    this.props.history.push({ search: `?search=${query}` });
  };

  clearMovies = () => {
    this.setState({ searchedMovies: [] });
  };

  loadMovies = async (query) => {
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
    const query = getSearchQuery(this.props.location.search);
    return (
      <>
        <SearchForm onSearch={this.onSearch} />
        <MoviesList
          movies={this.state.searchedMovies}
          prevPath={`/movies?search=${query}`}
        />
      </>
    );
  }
}

export default MoviesViews;
