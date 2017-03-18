import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.film.userRating.score,
      film_id: this.props.film.id
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(rating) {
    if (this.state.score === 0) {
      this.props.submitRating({
        score: rating,
        film_id: this.props.film.id
      });
    } else {
      this.props.updateRating({
        id: this.props.film.userRating.id,
        score: rating
      });
    }
    this.setState({score: rating});
  }

  render() {
    return(
      <div>
        <h3>Rate this Film:</h3>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={this.props.film.userRating.score}
          onStarClick={this.handleInput}
          starColor={'#e6994c'}
          emptyStarColor={'#ccc'}/>
      </div>
    );
  }
}

export default Ratings;
