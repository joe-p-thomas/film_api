import React from 'react';
import { withRouter } from 'react-router';

class FilmIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const films = this.props.films.map((film) => (
      <div key={film.id}>
        <h2>{film.title}</h2>
      </div>
    ));
    return (
      <div>
        <h1>Film Index</h1>
        <ul>
          {films}
        </ul>
      </div>
    );
  }
}

export default withRouter(FilmIndex);
