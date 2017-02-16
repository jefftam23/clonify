import { RECEIVE_ALL_ARTISTS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const ArtistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    default:
      return oldState;
  }
};

export default ArtistsReducer;
