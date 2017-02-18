import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { receiveCurrentUser } from '../actions/session_actions';
import App from './app';
import Auth from './auth';
import AuthFormContainer from './auth_form/auth_form_container';
import BrowseContainer from './browse/browse_container';
import ArtistDetailsContainer from './browse/artist_details_container';
import AlbumDetailsContainer from './browse/album_details_container';

const Root = ({ store }) => {

  const _clearErrors = () => {
    store.dispatch(receiveCurrentUser(null));
  };

  const _loggedIn = () => {
    return Boolean(store.getState().session.currentUser);
  };

  const _ensureLoggedIn = (nextState, replace) => {
    if (!_loggedIn()) {
      replace('/login');
    }
  };

  const _redirect = (nextState, replace) => {
    if (_loggedIn()) {
      replace('/browse');
    } else {
      replace('/login');
    }
  };

  const _sessionEnter = (nextState, replace) => {
    if (_loggedIn()) {
      replace('/browse');
    } else {
      _clearErrors();
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/">
          <IndexRoute onEnter={ _redirect } />

          <Route component={ App }>
            <Route path="/browse" component={ BrowseContainer } onEnter={ _ensureLoggedIn } />
            <Route path="/artists/:artistId" component={ ArtistDetailsContainer } onEnter={ _ensureLoggedIn } />
            <Route path="/albums/:albumId" component={ AlbumDetailsContainer } onEnter={ _ensureLoggedIn } />
          </Route>
        </Route>

        <Route component={ Auth } onEnter={ _sessionEnter }>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ _sessionEnter } />
          <Route path="/login" component={ AuthFormContainer } onEnter={ _sessionEnter } />
        </Route>

      </Router>
    </Provider>
  );

};

export default Root;
