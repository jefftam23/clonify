import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUM_DETAILS = "RECEIVE_ALBUM_DETAILS";

export const fetchAlbumDetails = (id) => {
  return (dispatch) => {
    return AlbumApiUtil.fetchAlbumDetails(id)
      .then(albumDetails => dispatch(receiveAlbumDetails(albumDetails)));
  };
};

export const receiveAlbumDetails = (albumDetails) => {
  return {
    type: RECEIVE_ALBUM_DETAILS,
    albumDetails
  };
};
