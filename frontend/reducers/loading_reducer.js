import {
  START_LOADING_ARTIST_DETAILS,
  RECEIVE_ARTIST_DETAILS } from '../actions/artist_actions';
import {
  START_LOADING_ALBUM_DETAILS,
  RECEIVE_ALBUM_DETAILS } from '../actions/album_actions';
import merge from 'lodash/merge';

const _defaultState = {
  artistDetailsLoading: false,
  albumDetailsLoading: false
};

Object.freeze(_defaultState);

const LoadingReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case START_LOADING_ARTIST_DETAILS:
      return merge({}, oldState, { artistDetailsLoading: true });

    case START_LOADING_ALBUM_DETAILS:
      return merge({}, oldState, { albumDetailsLoading: true });

    case RECEIVE_ARTIST_DETAILS:
    case RECEIVE_ALBUM_DETAILS:
      return _defaultState;

    default:
      return oldState;
  }
};

export default LoadingReducer;
