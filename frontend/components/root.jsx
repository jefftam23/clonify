import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { receiveCurrentUser } from '../actions/session_actions';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import BrowseContainer from './browse/browse_container';

const Root = ({ store }) => {

  const _clearErrors = () => {
    store.dispatch(receiveCurrentUser(null));
  }

  const _loggedIn = () => {
    return Boolean(store.getState().session.currentUser);
  };

  const _ensureLoggedIn = (nextState, replace) => {
    if (!_loggedIn()) {
      replace('/login');
    }
  };

  const _sessionEnter = (nextState, replace) => {
    if (_loggedIn()) {
      replace('/browse');
    }
    _clearErrors();
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
          <Route path="/signup"
            component={ AuthFormContainer }
            onEnter={ _sessionEnter } />
          <Route path="/login"
            component={ AuthFormContainer }
            onEnter={ _sessionEnter }/>
          <Route path="/browse"
            component={ BrowseContainer }
            onEnter={ _ensureLoggedIn } />
      </Router>
    </Provider>
  );

};

export default Root;
