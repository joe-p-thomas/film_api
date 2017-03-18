import { connect } from 'react-redux';
import FilmIndex from './film_index';

const mapStateToProps = (state) => ({
  films: state.films.films
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FilmIndex);
