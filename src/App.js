import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Header />
      <Main />
    </Suspense>
  );
};

// https://developers.themoviedb.org/3/trending/get-trending

// Ключ API (v3 auth)
// 24f3be077b2e648be81bca41e098d522

// Пример API-запроса
//api.themoviedb.org/3/movie/550?api_key=24f3be077b2e648be81bca41e098d522

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGYzYmUwNzdiMmU2NDhiZTgxYmNhNDFlMDk4ZDUyMiIsInN1YiI6IjYxMDMxMTAxZWU0M2U4MDAyN2JlMDk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xmLaD1m0yxhUnZ4PVD2aOyajZFEyj13Im_oY3wYAtSc

export default App;
