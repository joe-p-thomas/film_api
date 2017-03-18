import { connect } from 'react-redux';

import { requestFilms } from '../../actions/film_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  requestFilms: (title) => dispatch(requestFilms(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
