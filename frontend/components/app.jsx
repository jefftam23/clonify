import React from 'react';
import MainNav from './main_nav';

const App = ({ children }) => (
  <div className="app-wrapper">
    <MainNav />
    { children }
  </div>
);

export default App;
