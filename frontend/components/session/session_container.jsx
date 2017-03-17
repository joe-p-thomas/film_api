import { connect } from 'react-redux';

import Session from './session';
import { requestLogin,
         requestSignup,
         receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(requestLogin(user)),
  signup: (user) => dispatch(requestSignup(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
