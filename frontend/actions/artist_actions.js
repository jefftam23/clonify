import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";

export const fetchAllArtists = () => {
  return (dispatch) => {
    return ArtistApiUtil.fetchAllArtists()
      .then(artists => dispatch(receiveAllArtists(artists)));
  };
};

export const receiveAllArtists = (artists) => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  };
};
