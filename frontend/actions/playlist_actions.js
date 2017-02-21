import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";

export const fetchUserPlaylists = (userId) => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchUserPlaylists(userId)
      .then(playlists => dispatch(receiveUserPlaylists(playlists)));
  };
};

export const receiveUserPlaylists = (playlists) => {
  return {
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  };
};
