import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
// export const RECEIVE_SINGLE_USER_PLAYLIST = "RECEIVE_SINGLE_USER_PLAYLIST";
// export const REMOVE_SINGLE_USER_PLAYLIST = "REMOVE_SINGLE_USER_PLAYLIST";

export const fetchPlaylists = () => {
  return (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists()
      .then(playlists => dispatch(receivePlaylists(playlists)));
  };
};

// export const createUserPlaylist = (userId, playlist) => {
//   return (dispatch) => {
//     return PlaylistApiUtil.createUserPlaylist(userId, playlist)
//       .then(respPlaylist => dispatch(receiveSingleUserPlaylist(respPlaylist)));
//   };
// };
//
// export const deleteUserPlaylist = (userId, playlistId) => {
//   return (dispatch) => {
//     return PlaylistApiUtil.deleteUserPlaylist(userId, playlistId)
//       .then(playlist => dispatch(removeSingleUserPlaylist(playlist)));
//   };
// };

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};
//
// export const receiveSingleUserPlaylist = (playlist) => {
//   return {
//     type: RECEIVE_SINGLE_USER_PLAYLIST,
//     playlist
//   };
// };
//
// export const removeSingleUserPlaylist = (playlist) => {
//   return {
//     type: REMOVE_SINGLE_USER_PLAYLIST,
//     playlist
//   };
// };
