import React from 'react';
import { withRouter } from 'react-router';

class FilmIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.className !== 'book-list') {
      let el = e.target;
      while (el.className !== 'book-list-item') {
        el = el.parentElement;
      }
      this.props.router.push(`/film/${el.id}`);
    }
    e.stopPropagation();
  }

  render() {
    const films = this.props.films.map((film, i) => (
      <div key={i}
           id={film.urlSlug}
           className={'book-list-item'}>
        <h2>{film.title}</h2>
      </div>
    ));
    return (
      <div>
        <ul onClick={this.handleClick}
            className={'book-list'}>
          {films}
        </ul>
      </div>
    );
  }
}

export default withRouter(FilmIndex);
