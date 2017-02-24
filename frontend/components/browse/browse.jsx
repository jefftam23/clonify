import React from 'react';
import { withRouter } from 'react-router';
import ArtistIndexContainer from './artist_index_container';

class Browse extends React.Component {
  componentWillMount() {
    this.props.receiveActiveNavItem();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.loggedIn) {
      this.props.router.push('/login');
    }
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className="main-content">
        <h1>Artists</h1>

        <ArtistIndexContainer />
      </div>
    );
  }
}

export default withRouter(Browse);
