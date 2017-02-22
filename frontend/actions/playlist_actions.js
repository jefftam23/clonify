import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";
export const RECEIVE_SINGLE_USER_PLAYLIST = "RECEIVE_SINGLE_USER_PLAYLIST";

export const fetchUserPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchUserPlaylists(userId)
      .then(playlists => dispatch(receiveUserPlaylists(playlists)));
  };
};

export const createUserPlaylist = (userId, playlist) => {
  return (dispatch) => {
    return PlaylistApiUtil.createUserPlaylist(userId, playlist)
      .then(respPlaylist => dispatch(receiveSingleUserPlaylist(respPlaylist)));
  };
};

export const receiveUserPlaylists = (playlists) => {
  return {
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  };
};

export const receiveSingleUserPlaylist = (playlist) => {
  return {
    type: RECEIVE_SINGLE_USER_PLAYLIST,
    playlist
  };
};
