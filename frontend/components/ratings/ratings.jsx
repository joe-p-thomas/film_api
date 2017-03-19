import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.film.userRating.score,
      film_id: this.props.film.id
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.film) {
      this.setState({score: nextProps.film.userRating.score});
    }
  }

  handleInput(e) {
    if (this.state.score === 0) {
      this.props.submitRating({
        score: e.target.value,
        film_id: this.props.film.id
      });
    } else {
      this.props.updateRating({
        id: this.props.film.userRating.id,
        score: e.target.value
      });
    }
    this.setState({score: e.target.value});
  }

  render() {
    let buttons = [1,2,3,4,5];
    buttons = buttons.map(i => (
      <input type="checkbox"
             name="score"
             value={i}
             label={i}
             checked={this.state.score >= i}
             key={i}
             className='rating-button'
             onChange={this.handleInput}/>
    ));
    return(
      <div className='rating'>
        <h3>Rate this Film:</h3>
          <form>
            1 {buttons} 5
          </form>
      </div>
    );
  }
}

export default Ratings;
