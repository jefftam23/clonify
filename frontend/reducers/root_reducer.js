import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';
import ArtistDetailsReducer from './artist_details_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  allArtists: ArtistsReducer,
  artistDetails: ArtistDetailsReducer
});

export default RootReducer;
