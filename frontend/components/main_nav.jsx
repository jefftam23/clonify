import React from 'react';
import { Link, hashHistory } from 'react-router';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';

const MainNav = ({ logout, currentUser }) => {
  return (
    <header className="main-nav-wrapper">
      <nav className="main-nav">

        <div className="top-nav">

          <div className="nav-logo">
            <Link to="/browse">
              <img src={ window.images.logo } />
            </Link>
          </div>

          <ul className="main-nav-items">

            <li className="browse-nav">
              <Link to="/browse">
                <img src={ window.images.browseIcon } />
                <p className="nav-item-text">Browse</p>
              </Link>
            </li>

            <li className="your-music-nav">
              <Link to="/browse">
                <img src={ window.images.yourMusicIcon } />
                <p className="nav-item-text">Your Music</p>
              </Link>
            </li>

            <li className="follow-nav">
              <Link to="/browse">
                <img src={ window.images.followIcon } />
                <p className="nav-item-text">Follow</p>
              </Link>
            </li>

          </ul>

        </div>

        <div className="bottom-nav">

          <div className="current-user">
            <p>{ currentUser ? currentUser.username : "" }</p>
          </div>

          <button className="logout-button"
            onClick={ () => logout().then(hashHistory.push('/login')) }>LOG OUT
          </button>

        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
