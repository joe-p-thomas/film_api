import React from 'react';
import FilmIndexContainer from '../films/film_index_container';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };

    this.timeout = 0;

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({query: e.target.value});
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.requestFilms({title: this.state.query});
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input type='text'
               onChange={this.handleInput}
               value={this.state.query}
               placeholder={'search'} />
        <FilmIndexContainer />
      </div>
    );
  }
}

export default Search;
