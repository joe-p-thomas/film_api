import React from 'react';
import { withRouter } from 'react-router';

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Film Detail</h1>
        <h2>{this.props.film.title}</h2>
      </div>
    );
  }
}

export default withRouter(FilmDetail);
