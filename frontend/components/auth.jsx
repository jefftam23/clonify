import React from 'react';
import WelcomeFeatures from './auth_form/welcome_features'

const Auth = ({ children }) => (
  <div className="auth">
    <h1>AUTH</h1>
    { children }
    <WelcomeFeatures />
  </div>
);

export default Auth;
