import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG_DETAILS = "RECEIVE_SONG_DETAILS";

export const fetchSongDetails = (id) => {
  return (dispatch) => {
    return SongApiUtil.fetchSongDetails(id)
      .then(songDetails => dispatch(receiveSongDetails(songDetails)));
  };
};

export const receiveSongDetails = (songDetails) => {
  return {
    type: RECEIVE_SONG_DETAILS,
    songDetails
  };
};
