import React from 'react';
import { withRouter } from 'react-router';

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id) {
      this.props.router.push(`/film/${e.target.id}`);
    }
  }

  render() {
    const relatedFilms = this.props.film.relatedFilms.map((film) => (
      <p key={film.id} id={film.urlSlug}>
        {film.title}
      </p>
    ));
    return (
      <div>
        <h1>Film Detail</h1>
        <h2>{this.props.film.title} ({this.props.film.year})</h2>
        <h3>Description:</h3>
        <p>{this.props.film.description}</p>

        <h3>Avg Rating:</h3>
        <p></p>

        <h3>Related Films:</h3>
        <ul onClick={this.handleClick}>
          {relatedFilms}
        </ul>
      </div>
    );
  }
}

export default withRouter(FilmDetail);
