import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Clonify</h1>, root);
});
