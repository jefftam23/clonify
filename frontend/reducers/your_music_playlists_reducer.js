import {
  RECEIVE_USER_PLAYLISTS,
  RECEIVE_SINGLE_USER_PLAYLIST,
  REMOVE_SINGLE_USER_PLAYLIST } from '../actions/playlist_actions';
import merge from 'lodash/merge';

const YourMusicPlaylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists;

    case RECEIVE_SINGLE_USER_PLAYLIST:
      return merge({}, oldState, { [action.playlist.id]: action.playlist });

    case REMOVE_SINGLE_USER_PLAYLIST:
      let newState = merge({}, oldState);
      delete newState[action.playlist.id];
      return newState;

    default:
      return oldState;
  }
};

export default YourMusicPlaylistsReducer;
