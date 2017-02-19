import React from 'react';
import MainNav from './main_nav';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = ({ children }) => (
  <div className="app-wrapper">
    <MainNav />
    { children }
    <AudioPlayerContainer />
  </div>
);

export default App;
