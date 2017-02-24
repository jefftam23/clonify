import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
                 errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
                 errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout()
      .then(  user => dispatch(logoutUser()),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
