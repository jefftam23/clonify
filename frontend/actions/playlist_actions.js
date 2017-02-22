import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST_DETAILS = "RECEIVE_PLAYLIST_DETAILS";
export const RECEIVE_SINGLE_PLAYLIST = "RECEIVE_SINGLE_PLAYLIST";
export const REMOVE_SINGLE_PLAYLIST = "REMOVE_SINGLE_PLAYLIST";

export const fetchPlaylists = () => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists()
      .then(playlists => dispatch(receivePlaylists(playlists)));
  };
};

export const fetchPlaylistDetails = (id) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylistDetails(id)
      .then(playlistDetails => dispatch(receivePlaylistDetails(playlistDetails)));
  };
};

export const createPlaylist = (playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.createPlaylist(playlist)
      .then(respPlaylist => dispatch(receiveSinglePlaylist(respPlaylist)));
  };
};

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylist(playlistId)
      .then(playlist => dispatch(removeSinglePlaylist(playlist)));
  };
};

export const updatePlaylist = (playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.updatePlaylist(playlist)
      .then(respPlaylist => dispatch(receiveSinglePlaylist(respPlaylist)));
  };
};

// Add song to playlist
export const createPlaylistListing = (playlistListing) => {
  return (dispatch) => {
    return PlaylistApiUtil.createPlaylistListing(playlistListing)
      .then(playlistDetails => dispatch(receivePlaylistDetails(playlistDetails)));
  };
};

// Remove song from playlist
export const deletePlaylistListing = (id) => {
  return (dispatch) => {
    return PlaylistApiUtil.deletePlaylistListing(id)
      .then(playlistDetails => dispatch(receivePlaylistDetails(playlistDetails)));
  };
};

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receivePlaylistDetails = (playlistDetails) => {
  return {
    type: RECEIVE_PLAYLIST_DETAILS,
    playlistDetails
  };
};

export const receiveSinglePlaylist = (playlist) => {
  return {
    type: RECEIVE_SINGLE_PLAYLIST,
    playlist
  };
};

export const removeSinglePlaylist = (playlist) => {
  return {
    type: REMOVE_SINGLE_PLAYLIST,
    playlist
  };
};
