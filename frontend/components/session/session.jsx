import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: ''
      },
      action: 'Log In',
      altAction: 'Sign Up',
      errors: this.props.errors
    };

    this.guestUser = {
      username: 'guest',
      password: 'password'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }

  handleInput(e) {
    const newUser = merge(this.state.user,{[e.target.name]: e.target.value});
    this.setState({user: newUser});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.action === 'Log In') {
      this.props.login(this.state.user).then(() => {
        this.props.router.push('/');
      });
    } else {
      this.props.signup(this.state.user).then(() => {
        this.props.router.push('/');
      });
    }
  }

  guestLogin() {
    this.props.login(this.guestUser).then(() => {
      this.props.router.push('/');
    });
  }

  toggleAction() {
    this.props.clearErrors();
    this.setState({
      action: this.state.altAction,
      altAction: this.state.action,
      user: {
        username: '',
        password: ''
      }
    });
  }

  render() {
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    return (
      <div className='auth'>
        <h1>{this.state.action}</h1>
        {errors}
        <form className='auth-form'>
          <input type='text'
                 name='username'
                 onChange={this.handleInput}
                 value={this.state.user.username}
                 placeholder={'username'}>
          </input>

          <input type='password'
                 name='password'
                 onChange={this.handleInput}
                 value={this.state.user.password}
                 placeholder={'password'} >
          </input>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <p>or</p>
        <div className='auth-buttons'>
          <button onClick={this.guestLogin}>Guest</button>
          <button onClick={this.toggleAction}>{this.state.altAction}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Session);
