import React, { Component } from "react";
import axios from "axios";
import MoviesList from "../components/MoviesList/MoviesList";

class HomeViews extends Component {
  state = {
    trending: [],
  };

  getTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=24f3be077b2e648be81bca41e098d522`
      );
      this.setState({ trending: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getTrending();
  }

  render() {
    const { trending } = this.state;

    return <MoviesList movies={trending} prevPath={"/"} />;
  }
}

export default HomeViews;
