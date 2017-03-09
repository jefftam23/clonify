import { RECEIVE_ALL_USERS,
         RECEIVE_SINGLE_USER,
         receiveSingleUser,
         receiveAllUsers } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;

    case RECEIVE_SINGLE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });

    default:
      return oldState;
  }
};

export default UsersReducer;
