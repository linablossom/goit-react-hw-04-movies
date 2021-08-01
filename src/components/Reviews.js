import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
  state = {
    reviews: [],
    id: 451048,
    authorId: "",
  };

  getReview = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.state.id}/reviews?api_key=24f3be077b2e648be81bca41e098d522`
      );
      this.setState({ reviews: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getReview();
  }

  render() {
    return (
      <ul>
        {this.state.reviews.map(({ id, author, content }) => (
          <li key={`review-${id}`}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;
