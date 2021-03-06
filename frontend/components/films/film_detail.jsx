import React from 'react';
import { withRouter } from 'react-router';

import RatingsContainer from '../ratings/ratings_container';

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.returnSearch = this.returnSearch.bind(this);
  }

  returnSearch() {
    this.props.router.push('/');
  }

  handleClick(e) {
    if (e.target.id) {
      this.props.router.push(`/film/${e.target.id}`);
    }
  }

  render() {
    const relatedFilms = this.props.film.relatedFilms.map((film) => (
      <p key={film.id} id={film.urlSlug} className='related-film'>
        {film.title}
      </p>
    ));
    return (
      <div>
        <button onClick={this.returnSearch}>Back to Search</button>
        <h2>{this.props.film.title} ({this.props.film.year})</h2>
        <h3>Description:</h3>
        <p>{this.props.film.description}</p>

        <h3>Avg Rating:</h3>
        <p>{this.props.film.avgRating}</p>

        <RatingsContainer film={this.props.film}/>

        <h3>Related Films:</h3>
        <ul onClick={this.handleClick} className='related-film-list'>
          {relatedFilms}
        </ul>
      </div>
    );
  }
}

export default withRouter(FilmDetail);
