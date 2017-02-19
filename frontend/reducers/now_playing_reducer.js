import { RECEIVE_SONG_DETAILS } from '../actions/song_actions';

const NowPlayingReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SONG_DETAILS:
      return action.songDetails;
    default:
      return oldState;
  }
};

export default NowPlayingReducer;
