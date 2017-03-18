import React from 'react';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input type='text'
               onChange={this.handleInput}
               value={this.state.query}
               placeholder={'search'} />
      </div>
    );
  }
}

export default Search;
