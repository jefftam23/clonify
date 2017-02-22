import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';
import ArtistsReducer from './artists_reducer';
import ArtistDetailsReducer from './artist_details_reducer';
import AlbumDetailsReducer from './album_details_reducer';
import NowPlayingReducer from './now_playing_reducer';
import YourMusicPlaylistsReducer from './your_music_playlists_reducer';
import PlaylistDetailsReducer from './playlist_details_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  allArtists: ArtistsReducer,
  artistDetails: ArtistDetailsReducer,
  albumDetails: AlbumDetailsReducer,
  nowPlaying: NowPlayingReducer,
  yourMusicPlaylists: YourMusicPlaylistsReducer,
  playlistDetails: PlaylistDetailsReducer
});

export default RootReducer;
