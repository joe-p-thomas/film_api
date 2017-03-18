import React from 'react';
import { withRouter } from 'react-router';

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout().then(
      () => this.props.router.push('/auth')
    );
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>log out</button>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Logout);
