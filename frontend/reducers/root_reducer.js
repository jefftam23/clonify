import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  allArtists: ArtistsReducer
});

export default RootReducer;
