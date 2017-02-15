import React from 'react';
import WelcomeFeatures from './auth_form/welcome_features'

const Auth = ({ children }) => (
  <div className="auth">
    { children }
    <WelcomeFeatures />
  </div>
);

export default Auth;
