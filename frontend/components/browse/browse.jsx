import React from 'react';
import { withRouter } from 'react-router';
import ArtistIndexContainer from './artist_index_container';

class Browse extends React.Component {

  componentWillReceiveProps(newProps) {
    if (!newProps.loggedIn) {
      this.props.router.push('/login');
    }
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div>
        <h1>BROWSE ARTISTS</h1>

        <h2>Hello { currentUser.username }!</h2>
        <button
          onClick={ logout }>LOGOUT
        </button>

        <ArtistIndexContainer />
      </div>
    );
  }
}

export default withRouter(Browse);
