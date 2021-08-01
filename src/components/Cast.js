import React, { Component } from "react";
import axios from "axios";

const BASE_IMG_URL = "https://www.themoviedb.org/t/p/w138_and_h175_face/";

class Cast extends Component {
  state = {
    cast: [],
    id: 451048,
  };

  loadCast = async () => {
    try {
      const { movieId } = this.props.match.params;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=24f3be077b2e648be81bca41e098d522`
      );
      this.setState({ cast: response.data.cast });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.loadCast();
  }

  render() {
    return (
      <ul>
        {this.state.cast.map(
          ({ id, profile_path, original_name, character, name }) => (
            <li key={`cast-${id}`}>
              {profile_path ? (
                <img src={BASE_IMG_URL + profile_path} alt={name} />
              ) : null}
              {original_name ? <p>{original_name}</p> : null}
              {character ? <p>Character: {character}</p> : null}
            </li>
          )
        )}
      </ul>
    );
  }
}

export default Cast;
