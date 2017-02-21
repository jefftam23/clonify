import { RECEIVE_USER_PLAYLISTS } from '../actions/playlist_actions';

const YourMusicPlaylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists;
    default:
      return oldState;
  }
};

export default YourMusicPlaylistsReducer;
