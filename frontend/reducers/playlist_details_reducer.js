import { RECEIVE_PLAYLIST_DETAILS } from '../actions/playlist_actions';

const PlaylistDetailsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST_DETAILS:
      return action.playlistDetails;
    default:
      return oldState;
  }
};

export default PlaylistDetailsReducer;
