import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const fetchAllUsers = () => {
  return (dispatch) => {
    return UserApiUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)));
  };
};

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};
