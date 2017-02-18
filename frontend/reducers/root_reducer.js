import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ArtistsReducer from './artists_reducer';
import ArtistDetailsReducer from './artist_details_reducer';
import AlbumDetailsReducer from './album_details_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  allArtists: ArtistsReducer,
  artistDetails: ArtistDetailsReducer,
  albumDetails: AlbumDetailsReducer
});

export default RootReducer;
