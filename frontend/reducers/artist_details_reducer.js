import { RECEIVE_ARTIST_DETAILS } from '../actions/artist_actions';
import merge from 'lodash/merge';

const ArtistDetailsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ARTIST_DETAILS:
      return action.artistDetails;
    default:
      return oldState;
  }
};

export default ArtistDetailsReducer;
