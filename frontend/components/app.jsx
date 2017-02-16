import React from 'react';
import MainNav from './main_nav';

const App = ({ children }) => (
  <div>
    <h1>Clonify</h1>
    <MainNav />
    { children }
  </div>
);

export default App;
