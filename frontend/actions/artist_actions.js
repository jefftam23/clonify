import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST_DETAILS = "RECEIVE_ARTIST_DETAILS";
export const START_LOADING_ARTIST_DETAILS = "START_LOADING_ARTIST_DETAILS";

export const fetchAllArtists = () => {
  return (dispatch) => {
    return ArtistApiUtil.fetchAllArtists()
      .then(artists => dispatch(receiveAllArtists(artists)));
  };
};

export const fetchArtistDetails = (id) => {
  return (dispatch) => {
    dispatch(startLoadingArtistDetails());
    return ArtistApiUtil.fetchArtistDetails(id)
      .then(artistDetails => dispatch(receiveArtistDetails(artistDetails)));
  };
};

export const startLoadingArtistDetails = () => {
  return {
    type: START_LOADING_ARTIST_DETAILS
  };
};

export const receiveAllArtists = (artists) => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  };
};

export const receiveArtistDetails = (artistDetails) => {
  return {
    type: RECEIVE_ARTIST_DETAILS,
    artistDetails
  };
};
