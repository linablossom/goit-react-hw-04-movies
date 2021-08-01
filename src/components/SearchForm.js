import React, { Component } from "react";

class SearchForm extends Component {
  state = { query: "" };

  onInputChange = (value) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSearch(this.state.query);
        }}
      >
        <label>
          <input
            type="text"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
