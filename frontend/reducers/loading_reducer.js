import {
  START_LOADING_ARTIST_DETAILS,
  RECEIVE_ARTIST_DETAILS } from '../actions/artist_actions';
import {
  START_LOADING_ALBUM_DETAILS,
  RECEIVE_ALBUM_DETAILS } from '../actions/album_actions';
import {
  START_LOADING_USER_DETAILS,
  START_LOADING_USER_INDEX,
  RECEIVE_SINGLE_USER,
  RECEIVE_ALL_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  artistDetailsLoading: false,
  albumDetailsLoading: false,
  userDetailsLoading: false,
  userIndexLoading: false
};

Object.freeze(_defaultState);

const LoadingReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case START_LOADING_ARTIST_DETAILS:
      return merge({}, oldState, { artistDetailsLoading: true });

    case START_LOADING_ALBUM_DETAILS:
      return merge({}, oldState, { albumDetailsLoading: true });

    case START_LOADING_USER_DETAILS:
      return merge({}, oldState, { userDetailsLoading: true });

    case START_LOADING_USER_INDEX:
      return merge({}, oldState, { userIndexLoading: true });

    case RECEIVE_ARTIST_DETAILS:
    case RECEIVE_ALBUM_DETAILS:
    case RECEIVE_SINGLE_USER:
    case RECEIVE_ALL_USERS:
      return _defaultState;

    default:
      return oldState;
  }
};

export default LoadingReducer;
