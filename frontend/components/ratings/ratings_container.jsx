import { connect } from 'react-redux';
import Ratings from './ratings';
import { submitRating, updateRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  film: ownProps.film
});

const mapDispatchToProps = (dispatch) => ({
  submitRating: (rating) => dispatch(submitRating(rating)),
  updateRating: (rating) => dispatch(updateRating(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
