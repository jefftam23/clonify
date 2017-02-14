import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import BrowseContainer from './browse/browse_container';

const Root = ({ store }) => {

  const _loggedIn = () => {
    return !!store.getState().session.currentUser;
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/browse');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
          <Route path="/signup"
            component={ AuthFormContainer }
            onEnter={ _redirectIfLoggedIn } />
          <Route path="/login"
            component={ AuthFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Route path="/browse" component={ BrowseContainer } />
      </Router>
    </Provider>
  );

};

export default Root;
