import { connect } from 'react-redux';
import FilmDetail from './film_detail';

const mapStateToProps = (state) => ({
  film: state.films.filmDetail
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
