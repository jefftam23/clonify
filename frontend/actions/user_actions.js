import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

export const fetchAllUsers = () => {
  return (dispatch) => {
    return UserApiUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)));
  };
};

export const fetchUserDetails = (id) => {
  return (dispatch) => {
    return UserApiUtil.fetchUserDetails(id)
      .then(userDetails => dispatch(receiveUserDetails(userDetails)));
  };
};

export const createUserFollow = (userFollow) => {
  return (dispatch) => {
    return UserApiUtil.createUserFollow(userFollow)
      .then(respUser => dispatch(receiveSingleUser(respUser)));
  };
};

export const deleteUserFollow = (id) => {
  return (dispatch) => {
    return UserApiUtil.deleteUserFollow(id)
      .then(respUser => dispatch(receiveSingleUser(respUser)));
  };
};

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const receiveUserDetails = (userDetails) => {
  return {
    type: RECEIVE_USER_DETAILS,
    userDetails
  };
};
