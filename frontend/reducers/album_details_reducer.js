import { RECEIVE_ALBUM_DETAILS } from '../actions/album_actions';

const AlbumDetailsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALBUM_DETAILS:
      return action.albumDetails;
    default:
      return oldState;
  }
};

export default AlbumDetailsReducer;
