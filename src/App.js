import React, { Component, Suspense } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {
    trending: [],
  };
  /*
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=24f3be077b2e648be81bca41e098d522`
      );
      this.setState({ trending: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };
*/
  render() {
    // const { trending } = this.state;
    // console.log(this.state.trending);
    // this.getMovies();
    return (
      <Suspense fallback={<div>Loading..</div>}>
        <Header />
        <Main />
      </Suspense>
    );
  }
}

// https://developers.themoviedb.org/3/trending/get-trending

// Ключ API (v3 auth)
// 24f3be077b2e648be81bca41e098d522

// Пример API-запроса
//api.themoviedb.org/3/movie/550?api_key=24f3be077b2e648be81bca41e098d522

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGYzYmUwNzdiMmU2NDhiZTgxYmNhNDFlMDk4ZDUyMiIsInN1YiI6IjYxMDMxMTAxZWU0M2U4MDAyN2JlMDk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmLaD1m0yxhUnZ4PVD2aOyajZFEyj13Im_oY3wYAtSc

export default App;
