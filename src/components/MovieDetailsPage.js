import React, { Component } from "react";

const BASE_IMG_URL = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";

class MovieDetailsPage extends Component {
  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.props.details;

    const date = new Date(release_date).getFullYear();
    const userScore = Math.floor(+vote_average * 10);
    const movieGenres = genres.map(({ name }) => name).join(", ");

    return (
      <>
        <button type="button" onClick={this.props.goBack}>
          &larr; Go back
        </button>

        <article>
          {poster_path ? (
            <img src={BASE_IMG_URL + poster_path} alt={title} />
          ) : null}
          <h2>
            {title ? title : null} ({date ? date : null})
          </h2>
          {userScore ? <p>User score: {userScore}%</p> : null}
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : null}
          <h4>Genres</h4>
          {movieGenres ? <p>{movieGenres}</p> : null}
        </article>
        <p>Additional information</p>
      </>
    );
  }
}

export default MovieDetailsPage;
