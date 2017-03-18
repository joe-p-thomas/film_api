import { connect } from 'react-redux';
import FilmDetail from './film_detail';

const mapStateToProps = (state) => ({
  film: state.films.filmDetail
});

export default connect(mapStateToProps)(FilmDetail);
